import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./infogen.module.css"
import Footer from "../../components/Footer";
import InfoGraphSideBar from "./InfoGraphSideBar";
import PageContentFooter from "../../components/PageContentFooter";

const Copyright = () => {

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    return (
        <>
            <Head>
                <title>Copyright & Disclaimers | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <InfoGraphSideBar />

                <div className={styles.pagecontent}>

                    <h1>Copyright & Disclaimers</h1>

                    <div className={styles.extraborder}>
                        <h2>Disclaimer!</h2>
                        <p>Please note that the website &quot;DevCrib&quot; does not claim rights to all information provided on the site as most of it was sourced from third parties.</p>
                        <p>The links to other sites referenced and owners of technologies used would be listed below accoding to category.</p>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Code Editor</h2>
                        <p>The online code editor used in DevCrib is Codepen. An online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, called "pens," and test them.</p>
                        <Link href="https://codepen.io/"><a><h3 className={styles.graybut}>Go to Codpen...</h3></a></Link>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Computer Language Data and Excercise question banks</h2>
                        <p>The three computer languages taught in DevCrib are HTML, CSS and JavaScript. The tutorial data and other information on thses computer languages and their orresponding excercises are acquired from the following sources;</p>
                        <div className={styles.lightbackground}>
                            <ul>
                                <li><Link href="https://www.w3schools.com/">
                                    <a> <h4>W3Schools</h4></a>
                                </Link></li>
                                <li><Link href="https://www.codecademy.com/">
                                    <a> <h4>Codecademy</h4></a>
                                </Link></li>
                                <li><Link href="https://en.wikipedia.org">
                                    <a> <h4>Wikipedia</h4></a>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Copyright;