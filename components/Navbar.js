import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import { useContext, useState, useRef, useEffect } from 'react'


const Navbar = () => {

    const [openTutorial, setopenTutorial] = useState(false)
    const [openReferences, setopenReferences] = useState(false)
    const [openExcercises, setopenExcercises] = useState(false)

    const tutorial = () => {
        setopenTutorial(!openTutorial)
        setopenExcercises(false)
        setopenReferences(false)
    }
    const references = () => {
        setopenReferences(!openReferences)
        setopenTutorial(false)
        setopenExcercises(false)
    }
    const excercises = () => {
        setopenExcercises(!openExcercises)
        setopenTutorial(false)
        setopenReferences(false)

    }

    const closeButton = () => {
        setopenTutorial(false)
    }

















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

                <p onClick={tutorial} >Tutorials<Image src="/cdown.png" width={25} height={25} /></p>
                <p onClick={references}>References<Image src="/cdown.png" width={25} height={25} /></p>
                <p onClick={excercises}>Exercises<Image src="/cdown.png" width={25} height={25} /></p>

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







            {openTutorial ? (
                <div className={styles.tutmodal}>
                    <button onClick={closeButton} className={styles.xbutton}>X</button>
                    <div className={styles.innertutm}>
                        <h1>Tutorials</h1>
                        <div className={styles.inouter}>
                            <div>
                                <h2>HTML</h2>
                                <Link href="#">
                                    <a><h3>Learn HTML Basic</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn HTML Advanced</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn HTML Icons</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn HTML Forms</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn HTML Canvas</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>HTML Examples</h3></a>
                                </Link>
                            </div>
                            <div>
                                <h2>CSS</h2>
                                <Link href="#">
                                    <a><h3>Learn CSS Basic</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn CSS Advanced</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn CSS Colors</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn CSS Grid</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn CSS RWD</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>CSS Examples</h3></a>
                                </Link>
                            </div>
                            <div>
                                <h2>JavaScript</h2>
                                <Link href="#">
                                    <a><h3>Learn JavaScript Basic</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn JavaScript Advanced</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn JavaScript Objects</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn JavaScript Functions</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>Learn JavaScript Classes</h3></a>
                                </Link>
                                <Link href="#">
                                    <a><h3>JavaScript Examples</h3></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
            }
            {openReferences ? (
                <div className={styles.tutmodal}>
                    trefum dolor sit amet consectetur adipisicing elit. Quos ullam accusantium voluptate suscipit harum, molestias alias non reiciendis excepturi atque delectus a enim laudantium dicta exercitationem neque accusamus illum aut.
                </div>
            ) : null
            }
            {openExcercises ? (
                <div className={styles.tutmodal}>
                    excerLorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam accusantium voluptate suscipit harum, molestias alias non reiciendis excepturi atque delectus a enim laudantium dicta exercitationem neque accusamus illum aut.
                </div>
            ) : null
            }








        </nav>
    );
}

export default Navbar;