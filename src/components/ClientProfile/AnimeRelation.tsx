"use client"
import styles from "@/app/profile.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperclip } from '@fortawesome/free-solid-svg-icons'

export default function AnimeRelation({ entry }) {
    const myAnimeList = entry.url || ''
    const handleClick = () => {
        if (myAnimeList !== '') {
            window.open(myAnimeList, "_blank");
        } else {
            console.log("URL del trailer vacía");
        }
    };


    return (
        <li key={entry.mal_id}>
            <p>Nombre: {entry.name}</p>
            <p>Tipo: {entry.type}</p>
            <button className={styles.botonRelations} onClick={handleClick}>
                Ver en MyAnimeList<FontAwesomeIcon icon={faPaperclip} style={{ width: '30px', height: '20px' }} />
            </button>
        </li>

    );
}