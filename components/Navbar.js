import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Head>
                <link rel="icon" href="/favicon.png" />

            </Head>
            <div className={styles.leftnavstuff}>
                <Link href="/">
                    <a>
                        <Image src="/devcrib2.png" alt="site logo" width={128} height={77} />
                    </a>

                </Link>

                <p>Tutorials<Image src="/cdown.png" width={25} height={25} className={styles.imgacenter} /></p>
                <p>References<Image src="/cdown.png" width={25} height={25} className={styles.imgacenter} /></p>
                <p>Exercises<Image src="/cdown.png" width={25} height={25} className={styles.imgacenter} /></p>

            </div>
            <div className={styles.rightnavstuff}>
                <button className={styles.serbtn}>
                    <Image
                        src="/whitesearch.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                    />
                </button>
                <Link href="https://ko-fi.com/michae_l#paypalModal">
                    <a target="_blank" className={styles.paidc}>Buy a Coffee 🙂☕</a>
                </Link>
                <p className={styles.login}>Log In</p>
            </div>

        </nav>
    );
}

export default Navbar;