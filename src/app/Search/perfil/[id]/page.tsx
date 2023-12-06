import styles from "@/app/profile.module.css"
import AnimeRelation from "@/components/ClientProfile/AnimeRelation";
import BotonTrailer from "@/components/ClientProfile/BotonTrailer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChartSimple, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
async function filterByID(id: number) {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/${id}/full`);
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data;
}

async function Profile({ params }) {
  const posts = await filterByID(params.id);
  return (
    <>
      <main className={styles.main} key={posts.data.mal_id}>
        <aside className={styles.aside}>
          <Image
            src={posts.data.images.jpg.image_url}
            height={0}
            width={1000}
            alt="animeImage" />
          <BotonTrailer posts={posts}></BotonTrailer>
          <div className={styles.info}>
            <hr />
            <h4>{posts.data.type}</h4>
            <hr />
            <h4>Estado: {posts.data.status}</h4>
            <hr />
            <h5>Puntiación: {posts.data.score} por {posts.data.scored_by} personas <FontAwesomeIcon icon={faChartSimple} /></h5>
            <h5>Popularidad: {posts.data.popularity} <FontAwesomeIcon icon={faStar} /></h5>
            <h5>Miembros: {posts.data.members} <FontAwesomeIcon icon={faUser} /></h5>
            <h5>Favoritos: {posts.data.favorites} <FontAwesomeIcon icon={faHeart} /></h5>
          </div>
          <div className={styles.studios}>
            <hr />
            <h3>Emisión</h3>
            <ul>
              <li>Desde: {posts.data.aired.from ? new Date(posts.data.aired.from).toLocaleDateString() : 'Fecha no disponible'}</li>
              <li>Hasta: {posts.data.aired.to ? new Date(posts.data.aired.to).toLocaleDateString() : 'Fecha no disponible'}</li>
              <li>Duración: {posts.data.aired.string ? posts.data.aired.string : 'Fecha no disponible'}</li>
              <li>Temporada: {posts.data.season}</li>
            </ul>
          </div>
          <div className={styles.genres}>
            <hr />
            <h3>Generos</h3>
            <ul>
              {posts.data.genres.map((genre) => (
                <li key={genre.mal_id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.studios}>
            <hr />
            <h3>Studios</h3>
            <ul>
              {posts.data.studios.map((studio) => (
                <li key={studio.mal_id}>{studio.name}</li>
              ))}
            </ul>
          </div>
        </aside>
        <div className={styles.information}>
          <div>
            <h1> {posts.data.title}</h1>
            <h1> {posts.data.title_japanese}</h1>
            <h1>SINOPSIS</h1>
            <br />
            <p> {posts.data.synopsis}</p>
          </div>

          <div className={styles.relations}>
            <h1>Relacionado</h1>
            <ul className={styles.cardsContainer}>
              {posts.data.relations.map((relation: any, index: number) => (
                <div className={styles.cards}>
                  <li key={index}>
                    <p>Relación: {relation.relation}</p>
                    <ul>
                      {relation.entry.map((entry: any) => (
                        <AnimeRelation entry={entry}></AnimeRelation>
                      ))}
                    </ul>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </main>

    </>
  );
}

export default Profile;
