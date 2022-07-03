import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../stickynav.module.css"


const StickyNav = () => {
    return (
        <>
            <div className={styles.stickytab}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/tutorials/html/">
                    <a>HTML</a>
                </Link>
                <Link href="/tutorials.css/">
                    <a className={styles.currentlang}>CSS</a>
                </Link>
                <Link href="#">
                    <a>JavaScript</a>
                </Link>
            </div>

        </>
    );
}

export default StickyNav;