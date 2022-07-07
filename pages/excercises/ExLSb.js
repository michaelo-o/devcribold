import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../excercises/exlsb.module.css"


const ExLSb = () => {
    return ( 
        <>
            <div className={styles.refleftsidebar}>
                <div className={styles.reflfsbcont}>
                    <h2>Excercises</h2>
                    <Link href="/excercises/html/">
                        <a>HTML Excercises  </a>
                    </Link>
                    <Link href="/excercises/css/">
                        <a>CSS Excercises  </a>
                    </Link>
                    <Link href="/excercises/javascript/">
                        <a>JavaScript Excercises  </a>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default ExLSb
