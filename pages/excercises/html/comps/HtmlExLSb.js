import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../../exlsb.module.css"


const HtmlExLSb = (props) => {

    const sidebarToggle = props.sidebarToggle

    return (
        <>
            <div className={styles.refleftsidebar}>
                <div className={styles.reflfsbcont}>
                    {/* <span className={styles.sbTgle}>
                        <Link href="/">
                            <a>
                                <Image src="/home.svg" width={35} height={35} alt="Home" />
                            </a>
                        </Link>
                        <span className={styles.cursor}><Image src="/x-square.svg" onClick={sidebarToggle} width={35} height={35} alt="Home" /></span>
                    </span> */}
                    <h2>HTML Excercises</h2>
                    <Link href="/excercises/html/">
                        <a>HTML Attributes  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Headings  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Parragraphs  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Styles  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Formatting  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Quotations  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Comments  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML CSS  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Links  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Images  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Tables  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML List  </a>
                    </Link>
                    <Link href="/excercises/html/">
                        <a>HTML Classes  </a>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default HtmlExLSb
