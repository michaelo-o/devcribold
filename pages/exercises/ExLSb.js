import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../exercises/exlsb.module.css"


const ExLSb = () => {
    return (
        <>
            <div className={styles.refleftsidebar}>
                <div className={styles.reflfsbcont}>
                    <h2>Exercises</h2>
                    <Link href="/exercises/html/">
                        <a>HTML Exercises  </a>
                    </Link>
                    <Link href="/exercises/css/">
                        <a>CSS Exercises  </a>
                    </Link>
                    <Link href="/exercises/javascript/">
                        <a>JavaScript Exercises  </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ExLSb
