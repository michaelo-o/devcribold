import styles from "../exercisesgen.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageContentFooter from "../../../components/PageContentFooter";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useRouter } from 'next/router';


const HtmlExercise = () => {

    const router = useRouter()

    const { user } = useAuthContext()

    const redirect = () => {
        setTimeout(() => {
            router.push('/login/')
        }, 50)
    }

    return (
        <>
            <Head>
                <title>HTML Exercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.genexcbackground}>

                {!user && redirect()}

                {user &&
                    <div className={styles.pagecontent}>
                        <h1>HTML Exercises</h1>
                        <h2>INSTRUCTIONS!</h2>
                        <div className={styles.extraborder}>

                            <h3>ATTEMPT ALL QUESTIONS!</h3>
                            <p>
                                You will get 1 point for each correct answer. <br />
                                Your score and total score will be displayed after you submit.</p>
                        </div>
                        <div className={styles.htmlstexc}>
                            <h1>Start HTML Exercises</h1>
                            <h2>Goodluck!</h2>
                            <Link href="/exercises/html/htmlexercises">
                                <a><h3>Start Exercise</h3>
                                </a>
                            </Link>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.footer100}>
                <PageContentFooter />
            </div>
        </>
    );
}

export default HtmlExercise;