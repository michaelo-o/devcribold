import styles from "../../stickynav.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


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
                <Link href="#">
                    <a>CSS</a>
                </Link>
                <Link href="#">
                    <a className={styles.currentlang}>JavaScript</a>
                </Link>
            </div>

        </>
    );
}

export default StickyNav;