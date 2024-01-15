import styles from "@/app/search.module.css"
import Input from "@/components/Search/Input";
export default function Searching() {
    return (
        <>
            <main className={styles.main}>
                <h1>BUSCA TUS ANIMES EN NUESTRO NAVEGADOR</h1>
                <Input></Input>
            </main>
        </>
    )
}