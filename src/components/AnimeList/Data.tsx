import styles from "@/app/page.module.css"
import Link from "next/link"
import MyToast from "../Dependencias/MyToast"
export default function Data({post}) {
    if (!post || !post.data) {
        return null;
        console.log("ES NULO EL POST") 
    }
    return (
        <div className={styles.card} key={post.mal_id}>
            <div className={styles.cardContent}>
                <h2>TITULO: {post.data.title}</h2>
                <h4>Episodios: {post.data.episodes}</h4>
                <h4>Tipo: {post.data.type}</h4>
                <h4>Popularidad: {post.data.popularity}</h4>
                <p>Duracion: {post.data.duration}</p>
                <h4>Seguidores: {post.data.members} (miembros)</h4>
                <Link href={`/Search/perfil/${post.data?.mal_id}`}><MyToast></MyToast></Link>
            </div>
        </div>
    )

}