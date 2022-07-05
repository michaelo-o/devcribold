import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../../reflsb.module.css"


const JsRefLSb = () => {
    return (
        <>
            <div className={styles.refleftsidebar}>
                <div className={styles.reflfsbcont}>
                    <h2>JavaScript References</h2>
                    <Link href="/references/javascript/jsmethref">
                        <a>JavaScript Property/Method Reference</a>
                    </Link>
                    <Link href="/references/javascript/jsclassref">
                        <a>JavaScript Class Reference</a>
                    </Link>
                    <Link href="/references/javascript/jsarrayref">
                        <a>JavaScript Array Reference</a>
                    </Link>
                    <Link href="/references/javascript/jsstringref">
                        <a>JavaScript String Reference</a>
                    </Link>
                    <Link href="/references/javascript/jsglobalref">
                        <a>JavaScript Global Reference</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default JsRefLSb;