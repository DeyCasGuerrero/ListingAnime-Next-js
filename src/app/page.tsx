import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid_wrapper}>

          <div className={styles.img}>
            <Image
              src={"/img1.png"}
              height={0}
              width={1000}
              alt=''
              className={styles.portada}
            />
          </div>
          <div className={styles.img}>
            <Image
              src={"/img2.png"}
              height={0}
              width={1000}
              alt=''
              className={styles.portada}
            />
          </div>
          <div className={styles.img}>
            <Image
              src={"/img3.png"}
              height={0}
              width={1000}
              alt=''
              className={styles.portada}
            />
          </div>
          <div className={styles.img}>
            <Image
              src={"/img4.png"}
              height={0}
              width={1000}
              alt=''
              className={styles.portada}
            />
          </div>
          <div className={styles.img}>
            <Image
              src={"/img5.png"}
              height={0}
              width={1000}
              alt=''
              className={styles.portada}
            />
          </div>
        </div>
        <div className={styles.slogan}>
          <h1>BUSCA TUS ANIMES</h1>
          <p> encuentra tus animes favoritos!</p>
        </div>
      </main>
    
    </>
  )

}
