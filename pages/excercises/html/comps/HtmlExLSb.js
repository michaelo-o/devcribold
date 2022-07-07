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
                    <Link href="#attrex">
                        <a>HTML Attributes Excercise</a>
                    </Link>
                    <Link href="#headex">
                        <a>HTML Headings Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Parragraphs Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Styles Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Formatting Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Quotations Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Comments Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML CSS Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Links Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Images Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Tables Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML List Excercise</a>
                    </Link>
                    <Link href="#">
                        <a>HTML Classes Excercise</a>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default HtmlExLSb
