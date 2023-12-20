import styles from "@/app/page.module.css"
import Link from 'next/link';
import MyToast from '@/components/Dependencias/MyToast';
import { fetchAnimeData } from "@/components/AnimeList/ApiAnime";
function quitarAcentos(cadena: string): string {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
async function filterByParams(params: string, campo: 'title' | 'title_english' | 'title_japanese' | 'type' | 'source') { //diferentes parametros para implementra a futuro
    const parametroBuscada = quitarAcentos(params.toLowerCase());

    try {
        let ids: number[] = bucle();
        const mapAnimesID = ids.map(async (id) => await fetchAnimeData(id));
        const responseDataArray = await Promise.all(mapAnimesID);
        //LO QUE HAGO AQUI ES TRASFORMA EL JSON EN UNA LISTA, ESTO DEBIDO A QUE ESTÁN COMPUESTOS DE OBJETOS ANIDADOS
        const data = responseDataArray.flatMap(responseData => responseData.data || []);

        const respuesta = data.filter(item =>
        quitarAcentos(item[campo].toLowerCase()).includes(parametroBuscada));

        if (respuesta.length > 0) {
            console.log("Se encontró esto xddd");
            return respuesta;
        } else {
            console.log("NULL POR NUB XDDDD")
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

function NotFound() {
    return (
        <div className={styles.error}>
            <div className={styles.no_found}>Post not found</div>
        </div>
    );
}
function bucle(): number[] {
    const ids: number[] = [];
    for (let i = 1; i <= 479; i++) {
        ids.push(i);
    }
    return ids;
}
async function ListAnime({ params }) {
    const parametro = params.param ? decodeURIComponent(params.param) : '';
    const postsByTitulo = await filterByParams(parametro, 'title');
    if (!postsByTitulo) {
        return <NotFound />;
    }

    return (
        <div>
            {postsByTitulo.length > 0 && (
                <>
                    {postsByTitulo.map((post) => (
                        <>
                            <div className={styles.card}>
                                <div className={styles.cardContent} key={post.mal_id}>
                                    <h2>TITULO: {post.title}</h2>
                                    <h4>Episodios: {post.episodes}</h4>
                                    <h4>Tipo: {post.type}</h4>
                                    <h4>Popularidad: {post.popularity}</h4>
                                    <p>Duracion: {post.duration}</p>
                                    <h4>Seguidores: {post.members} (miembros)</h4>
                                    <Link href={`/Search/perfil/${post.mal_id}`}><MyToast></MyToast></Link>
                                </div>
                            </div>
                        </>

                    ))}
                </>
            )}

        </div>
    );
}
export default ListAnime;
