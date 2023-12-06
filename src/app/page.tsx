import Image from 'next/image'
import styles from './page.module.css'
import List from '../components/AnimeList/Api'
import { Suspense } from 'react'
import LoadingSection from '@/components/LoadingSections/loadingDown'
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
      <section className={styles.contentAnime}>
        <h1>ANIMES RANDOMS</h1>
        <Suspense fallback={<LoadingSection></LoadingSection>}>
          <List /*useRandom*/ ></List>
        </Suspense>
      </section>
    </>
  )

}
