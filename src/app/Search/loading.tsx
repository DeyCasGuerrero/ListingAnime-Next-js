import styles from '@/app/search.module.css'
import Image from 'next/image'
function LoadingPage(){
    
    return(
        <div className={styles.LoadingPage}>
            <Image
            src={"/chibi.jpg"}
            height={1000}
            width={1000}
            alt='chibi xd'
            className={styles.img}
            />
            <h1>
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </h1>
        </div>
    )
}

export default LoadingPage;