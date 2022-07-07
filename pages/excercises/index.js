import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../excercises/excercisesgen.module.css"
import ExLSb from "./ExLSb";
import PageContentFooter from "../../components/PageContentFooter";
// default imports


// &#123; Left Curly Bracket
// &#125; right Curly Bracket


// <	&lt;	&#60;	&#x3C;	less than
// >	&gt;	&#62;	&#x3E;	greater than


const ExercisesHome = () => {
    return (
        <>

            <div className={styles.genexcbackground}>
                <ExLSb />

                <div className={styles.pagecontent}>
                    <h1>DevCrib Excercises</h1>
                    <h2>Test Your Skills!</h2>
                    <div className={styles.extraborder}>
                        <h3>Excercises</h3>
                        <p>There a variety of exercises (with answers) for each tutorial. <br />
                            Try to solve an exercise by editing some code.Get a &quot; hint&quot; if you&apos;re stuck, or show the answer to see what you&apos;ve done wrong.</p>
                    </div>

                    <div className={styles.htmlex}>
                        <h1>HTML</h1>

                        <Link href="/excercises/html/">
                            <a><h3>Start Excercise</h3>
                            </a>
                        </Link>

                    </div>
                    <div className={styles.cssex}>
                        <h1>CSS</h1>

                        <Link href="#">
                            <a><h3>Start Excercise</h3>
                            </a>
                        </Link>

                    </div>
                    <div className={styles.jsex}>
                        <h1>JavaScript</h1>

                        <Link href="#">
                            <a><h3>Start Excercise</h3>
                            </a>
                        </Link>

                    </div>






























                    <PageContentFooter />
                </div>
            </div>
        </>
    );
}

export default ExercisesHome;