import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../stickynav.module.css"


const StickyNav = () => {
    return (
        <>
            <div className={styles.stickytab}>
                <Link href="/">
                    <a><Image src="/home.svg" width={25} height={25} alt="Home" /></a>
                </Link>
                <Link href="/tutorials/html/">
                    <a>HTML</a>
                </Link>
                <Link href="/tutorials.css/">
                    <a className={styles.currentlang}>CSS</a>
                </Link>
                <Link href="/tutorials/javascript/">
                    <a>JavaScript</a>
                </Link>
            </div>

        </>
    );
}

export default StickyNav;