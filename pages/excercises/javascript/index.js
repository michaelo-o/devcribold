import styles from "../excercisesgen.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageContentFooter from "../../../components/PageContentFooter";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useRouter } from 'next/router';


const JSExcercise = () => {

    const router = useRouter()

    const { user } = useAuthContext()


    return (
        <>
            <Head>
                <title>JavaScript Excercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.genexcbackground}>
                {!user && setTimeout(() => {
                    // router.go(-1)
                    // router.go(1)
                    router.push('/login/')
                }, 50)}



                {user &&
                    <div className={styles.pagecontent}>
                        <h1>JavaScript Excercises</h1>
                        <h2>INSTRUCTIONS!</h2>
                        <div className={styles.extraborder}>

                            <h3>ATTEMPT ALL QUESTIONS!</h3>
                            <p>
                                You will get 1 point for each correct answer. <br />
                                Your score and total score will be displayed after you submit.</p>
                        </div>
                        <div className={styles.jsstexc}>
                            <h1>Start JavaScript Excercises</h1>
                            <h2>Goodluck!</h2>
                            <Link href="/excercises/javascript/jsexcercises">
                                <a><h3>Start Excercise</h3>
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

export default JSExcercise;