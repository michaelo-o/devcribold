import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import { useContext, useState, useRef, useEffect } from 'react'
import NavTutHtml from './NavTut/NavTutHtml'
import NavTutCss from './NavTut/NavTutCss'
import NavTutJs from './NavTut/NavTutJs'
import NavRefJs from './NavRef/NavRefJs'
import NavRefCss from './NavRef/NavRefCss'
import NavRefHtml from './NavRef/NavRefHtml'


const Navbar = () => {

    const [openTutorial, setopenTutorial] = useState(false)
    const [openReferences, setopenReferences] = useState(false)
    const [openExcercises, setopenExcercises] = useState(false)
    const [openMenu, setopenMenu] = useState(false)
    const [mobileTutorial, setmobileTutorial] = useState(false)
    const [mobileReference, setmobileReference] = useState(false)
    const [mobileExcercise, setmobileExcercise] = useState(false)

    const tutorial = () => {
        setopenTutorial(!openTutorial)
        setopenExcercises(false)
        setopenReferences(false)
        // setopenMenu(false)
    }
    const references = () => {
        setopenReferences(!openReferences)
        setopenTutorial(false)
        setopenExcercises(false)
        // setopenMenu(false)
    }
    const excercises = () => {
        setopenExcercises(!openExcercises)
        setopenTutorial(false)
        setopenReferences(false)
        // setopenMenu(false)
    }

    const closeButton = () => {
        setopenTutorial(false)
        setopenExcercises(false)
        setopenReferences(false)
        // setopenMenu(false)
    }

    const mobilemenu = () => {
        setopenMenu(!openMenu)
    }

    const mobilemenuback = () => {
        setmobileTutorial(false)
        setmobileExcercise(false)
        setmobileReference(false)
        setopenMenu(false)
    }

    const mobtut = () => {
        setmobileTutorial(!mobileTutorial)
        setmobileExcercise(false)
        setmobileReference(false)
    }

    const mobref = () => {
        setmobileReference(!mobileReference)
        setmobileTutorial(false)
        setmobileExcercise(false)
    }

    const mobex = () => {
        setmobileExcercise(!mobileExcercise)
        setmobileTutorial(false)
        setmobileReference(false)
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

                <p onClick={tutorial} >Tutorials<Image src="/cdown.png" width={25} height={25} alt="Open" /></p>
                <p onClick={references}>References<Image src="/cdown.png" width={25} height={25} alt="Open" /></p>
                <p onClick={excercises}>Exercises<Image src="/cdown.png" width={25} height={25} alt="Open" /></p>

            </div>
            <div className={styles.rightnavstuff}>
                {/* <button className={styles.serbtn}>
                    <Image
                        src="/whitesearch.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                    />
                </button> */}
                <Link href="https://ko-fi.com/michae_l#paypalModal">
                    <a target="_blank" className={styles.paidc}>Buy a Coffee 🙂☕</a>
                </Link>
                <p className={styles.login}>Log In</p>
            </div>

            <div className={styles.mobilenavstuff}>
                <Link href="/">
                    <a>
                        <Image src="/devcrib2.png" alt="site logo" width={128} height={77} />
                    </a>
                </Link>

                <p onClick={mobilemenu} >Menu<Image src="/cdown.png" width={22} height={22} alt="Open" /></p>

                <Link href="https://ko-fi.com/michae_l#paypalModal">
                    <a target="_blank" className={styles.paidc}>🙂☕</a>
                </Link>
                <span className={styles.mobilelogin}><Image src="/user1-removebg-preview.png" width={65} height={45} alt="User" /></span>
            </div>



            {openTutorial ? (
                <div className={styles.tutmodal}>
                    <button onClick={closeButton} className={styles.xbutton}><h2>X</h2></button>
                    <div className={styles.innertutm}>
                        <h1>Tutorials</h1>
                        <div className={styles.inouter}>
                            <NavTutHtml />
                            <NavTutCss />
                            <NavTutJs />
                        </div>
                    </div>
                </div>
            ) : null
            }
            {openReferences ? (
                <div className={styles.tutmodal}>
                    <button onClick={closeButton} className={styles.xbutton}><h2>X</h2></button>
                    <div className={styles.innertutm}>
                        <h1>References</h1>
                        <div className={styles.inouter}>
                            <NavRefHtml />
                            <NavRefCss />
                            <NavRefJs />
                        </div>
                    </div>
                </div>
            ) : null
            }
            {openExcercises ? (
                <div className={styles.tutmodal}>
                    <button onClick={closeButton} className={styles.xbutton}><h2>X</h2></button>
                    <div className={styles.innertutm}>
                        <h1>Excercises</h1>
                        <div className={styles.inouter}>
                            <h1>Coming Soon...</h1>
                        </div>
                    </div>
                </div>
            ) : null
            }

            {openMenu ? (
                <div className={styles.mobiletutmodal}>
                    <button onClick={mobilemenuback} className={styles.mobilexbutton}><h2>X</h2></button>
                    <div className={styles.mobileinnertutm}>
                        <h1>Menu</h1>
                        <div className={styles.mobileinouter}>
                            <p onClick={mobtut}>Tutorials<Image src="/cdown.png" width={25} height={25} alt="Open" /></p>
                            {mobileTutorial ? (
                                <div className={styles.tutdpnc}>
                                    <NavTutHtml />
                                    <NavTutCss />
                                    <NavTutJs />
                                </div>
                            ) : null}
                            <p onClick={mobref}>References<Image src="/cdown.png" width={25} height={25} alt="Open" /></p>
                            {mobileReference ? (
                                <div className={styles.tutdpnc}>
                                    <NavRefHtml />
                                    <NavRefCss />
                                    <NavRefJs />
                                </div>
                            ) : null}
                            <p onClick={mobex}>Exercises<Image src="/cdown.png" width={25} height={25} alt="Open" /></p>
                            {mobileExcercise ? (
                                <div className={styles.tutdpnc}>
                                    <h1>Coming Soon...</h1>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null
            }






        </nav>
    );
}

export default Navbar;