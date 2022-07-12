import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./infogen.module.css"


const InfoGraphSideBar = () => {



    return (
        <>
            <div className={styles.leftsidebar}>
                <div className={styles.lfsbcont}>
                    <h2>About Us</h2>
                    <Link href="/infographics/about/">
                        <a>About DevCrib</a>
                    </Link>
                    <Link href="/infographics/termsofservice/">
                        <a>About Terms </a>
                    </Link>
                    <Link href="/infographics/privacypolicy/">
                        <a>About Privacy </a>
                    </Link>
                    <Link href="/infographics/copyright/">
                        <a>Copyright/Disclaimers </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default InfoGraphSideBar;