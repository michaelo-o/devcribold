import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../../reflsb.module.css"


const HtmlRefLSb = () => {
    return (
        <>
            <div className={styles.refleftsidebar}>
                <div className={styles.reflfsbcont}>
                    <h2>HTML References</h2>
                    <Link href="/references/html/htmltagref">
                        <a>HTML Tag Reference</a>
                    </Link>
                    <Link href="/references/html/unsupportedhtmltags">
                        <a>Unsupported/Deprecated Tags</a>
                    </Link>
                    <Link href="/references/html/htmlcolref">
                        <a>HTML Color Reference</a>
                    </Link>
                    <Link href="/references/html/htmlattrref">
                        <a>HTML Attribute Reference</a>
                    </Link>
                    <Link href="/references/html/unsupportedhtmlattr">
                        <a>Unsupported/Deprecated Attributes</a>
                    </Link>
                    <Link href="/references/html/htmleventref">
                        <a>HTML Event Reference</a>
                    </Link>
                    <Link href="/references/html/htmlmediaref">
                        <a>HTML Media Reference</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HtmlRefLSb;