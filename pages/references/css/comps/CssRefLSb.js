import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../../reflsb.module.css"


const CssRefLSb = () => {
    return (
        <>
            <div className={styles.refleftsidebar}>
                <div className={styles.reflfsbcont}>
                    <h2>CSS References</h2>
                    <Link href="/references/css/csspropref">
                        <a>CSS Property Reference</a>
                    </Link>
                    <Link href="/references/css/cssselref">
                        <a>CSS Selector Reference</a>
                    </Link>
                    <Link href="/references/css/cssfunref">
                        <a>CSS Function Reference</a>
                    </Link>
                    <Link href="/references/css/cssunitref">
                        <a>CSS Unit Reference</a>
                    </Link>
                    <Link href="/references/css/cssentities">
                        <a>CSS Entities</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CssRefLSb;