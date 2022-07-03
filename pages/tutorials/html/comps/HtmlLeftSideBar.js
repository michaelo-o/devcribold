import styles from "../../leftsidebar.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";



const HtmlLeftSidebar = () => {



    return (
        <>
            <div className={styles.leftsidebar}>
                <div className={styles.lfsbcont}>
                    <h2>HTML Tutorial</h2>
                    <Link href="/tutorials/html/">
                        <a>HTML Home</a>
                    </Link>
                    <Link href="#">
                        <a>Introduction </a>
                    </Link>
                    <Link href="#">
                        <a>Editors </a>
                    </Link>
                    <Link href="#">
                        <a>Basic </a>
                    </Link>
                    <Link href="#">
                        <a>Elements </a>
                    </Link>
                    <Link href="#">
                        <a>Attributes </a>
                    </Link>
                    <Link href="#">
                        <a>Headings </a>
                    </Link>
                    <Link href="#">
                        <a>Paragraphs </a>
                    </Link>
                    <Link href="#">
                        <a>Styles </a>
                    </Link>
                    <Link href="#">
                        <a>Formatting </a>
                    </Link>
                    <Link href="#">
                        <a>Quotations </a>
                    </Link>
                    <Link href="#">
                        <a>Comments </a>
                    </Link>
                    <Link href="#">
                        <a>Colors </a>
                    </Link>
                    <Link href="#">
                        <a>CSS in HTML</a>
                    </Link>
                    <Link href="#">
                        <a>Links </a>
                    </Link>
                    <Link href="#">
                        <a>Images </a>
                    </Link>
                    <Link href="#">
                        <a>Favicon </a>
                    </Link>
                    <Link href="#">
                        <a>Tables </a>
                    </Link>
                    <Link href="#">
                        <a>Lists </a>
                    </Link>
                    <Link href="#">
                        <a>Block & Inline </a>
                    </Link>
                    <Link href="#">
                        <a>Classes </a>
                    </Link>
                    <Link href="#">
                        <a>Id </a>
                    </Link>
                    <Link href="#">
                        <a>Iframes </a>
                    </Link>
                    <Link href="#">
                        <a>JavaScript in HTML </a>
                    </Link>
                    <Link href="#">
                        <a>File Paths </a>
                    </Link>
                    <Link href="#">
                        <a>Head </a>
                    </Link>
                    <Link href="#">
                        <a>Layout </a>
                    </Link>
                    <Link href="#">
                        <a>Responsive </a>
                    </Link>
                    <Link href="#">
                        <a>Computercode </a>
                    </Link>
                    <Link href="#">
                        <a>Semantics </a>
                    </Link>
                    <Link href="#">
                        <a>Style Guide </a>
                    </Link>
                    <Link href="#">
                        <a>Entities </a>
                    </Link>
                    <Link href="#">
                        <a>Symbols </a>
                    </Link>
                    <Link href="#">
                        <a>Emojis </a>
                    </Link>
                    <Link href="#">
                        <a>Charset </a>
                    </Link>
                    <Link href="#">
                        <a>URL Encode </a>
                    </Link>
                    <Link href="#">
                        <a>HTML vs.XHTML </a>
                    </Link>
                    <h2>HTML Forms</h2>
                    <Link href="#">
                        <a>Forms </a>
                    </Link>
                    <Link href="#">
                        <a>Form Attributes </a>
                    </Link>
                    <Link href="#">
                        <a>Form Elements </a>
                    </Link>
                    <Link href="#">
                        <a>Input Types </a>
                    </Link>
                    <Link href="#">
                        <a>Input Attributes </a>
                    </Link>
                    <Link href="#">
                        <a>Input Form Attributes </a>
                    </Link>
                    <h2>HTML Media</h2>
                    <Link href="#">
                        <a>Media</a>
                    </Link>
                    <Link href="#">
                        <a>Video </a>
                    </Link>
                    <Link href="#">
                        <a>Audio </a>
                    </Link>
                    <Link href="#">
                        <a>Plug-Ins </a>
                    </Link>
                    <Link href="#">
                        <a>YouTube </a>
                    </Link>
                    <h2>HTML Examples</h2>
                    <Link href="#">
                        <a>Examples </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HtmlLeftSidebar;