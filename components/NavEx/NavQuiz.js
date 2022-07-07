import Link from 'next/link'
import styles from "../../styles/navbar.module.css"


const NavQuiz = (props) => {

    const excercises = props.excercises

    return (
        <>
            <div>
                <Link href="/quizzes/">
                    <h2 onClick={excercises} className={styles.excgrayback}>Quizzes</h2>
                </Link>
                <Link href="/quizzes/html/">
                    <a><h3 onClick={excercises}>HTML Quiz</h3></a>
                </Link>
                <Link href="/quizzes/css/">
                    <a><h3 onClick={excercises}>CSS Quiz</h3></a>
                </Link>
                <Link href="/quizzes/javascript/">
                    <a><h3 onClick={excercises}>JavaScript Quiz</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavQuiz;