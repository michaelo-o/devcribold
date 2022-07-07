import styles from "../excercisesgen.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageContentFooter from "../../../components/PageContentFooter";

const HtmlExcercise = () => {
    return (
        <>
            <Head>
                <title>HTML Excercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.genexcbackground}>

                <div className={styles.pagecontent}>
                    <h1>HTML Excercises</h1>
                    <h2>INSTRUCTIONS!</h2>
                    <div className={styles.extraborder}>

                        <h3>ATTEMPT ALL QUESTIONS!</h3>
                        <p>
                            You will get 1 point for each correct answer. <br />
                            Your score and total score will be displayed after you submit.</p>
                    </div>
                    <div className={styles.htmlstexc}>
                        <h1>Start HTML Excercises</h1>
                        <h2>Goodluck!</h2>
                        <Link href="/excercises/html/htmlexcercises">
                            <a><h3>Start Excercise</h3>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={styles.footer100}>
                <PageContentFooter />
            </div>
        </>
    );
}

export default HtmlExcercise;