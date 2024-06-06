'use client';

import styles from "@/app/search.module.css"
import {ScriptSearch} from "./ScriptSearch"

export default function Input() {

    const {
        handleKeyDown,
        value,
        handleChange,
        handleMouseClick,
    } = ScriptSearch();
    return (
        <>
            <div className={styles.search}>
                <label>
                    <input type="search" className={styles.search_box} name="search"
                        placeholder="Coloca tu anime preferido"
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        value={value}
                    />
                </label>
                <button className={styles.button} onClick={handleMouseClick} > BUSCAR </button>
            </div>

        </>
    )
}