'use client';
import styles from "@/app/profile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

export default function BotonTrailer({ posts }) {
    let dataTrailer = '';

    if (posts && posts.data && posts.data.trailer && posts.data.trailer.url) {
        dataTrailer = posts.data.trailer.url;
    }
    const [showMensaje, setShowMensaje] = useState(false);

    const handleClick = () => {
        if (dataTrailer !== '') {
            window.open(dataTrailer, "_blank");
        } else {
            setShowMensaje(true);
        }
    };

    const cerrarMensaje = () => {
        setShowMensaje(false);
    };
    return (
        <>
            <button className={styles.trailer} onClick={handleClick}>
                Ver trailer <FontAwesomeIcon icon={faYoutube} style={{ width: '30px', height: '20px' }} />
            </button>
            <div className={`${styles.contenerdor_modelo} ${showMensaje ? styles.active : ''}`}>
                <div className={styles.advertencia}>
                    <p>NO HAY TRAILER EN LA API</p>
                    <button className={styles.cerrar} onClick={cerrarMensaje}>CERRAR</button>
                </div>
            </div>

        </>
    );
}
