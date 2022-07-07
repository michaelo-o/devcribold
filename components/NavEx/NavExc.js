import Link from 'next/link'
import styles from "../../styles/navbar.module.css"


const NavExc = (props) => {

    const excercises = props.excercises

    return (
        <>
            <div>
                <Link href="/excercises/">
                    <h2 onClick={excercises} className={styles.excgrayback}>Excercises</h2>
                </Link>
                <Link href="/excercises/html/">
                    <a><h3 onClick={excercises}>HTML Excercise</h3></a>
                </Link>
                <Link href="/excercises/css/">
                    <a><h3 onClick={excercises}>CSS Excercise</h3></a>
                </Link>
                <Link href="/excercises/javascript/">
                    <a><h3 onClick={excercises}>JavaScript Excercise</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavExc;