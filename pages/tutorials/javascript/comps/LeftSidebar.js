import styles from "../../leftsidebar.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";



const LeftSidebar = () => {



    return (
        <>
            <div className={styles.leftsidebar}>
                <div className={styles.lfsbcont}>
                    <h2>JavaScript Tutorial</h2>
                    <Link href="/tutorials/javascript/">
                        <a>JavaScript Home</a>
                    </Link>
                    <Link href="#">
                        <a>Introduction </a>
                    </Link>
                    <Link href="#">
                        <a>Where To </a>
                    </Link>
                    <Link href="#">
                        <a>Output </a>
                    </Link>
                    <Link href="#">
                        <a>Statements </a>
                    </Link>
                    <Link href="#">
                        <a>Syntax </a>
                    </Link>
                    <Link href="#">
                        <a>Comments </a>
                    </Link>
                    <Link href="#">
                        <a>Variables (Let & Const) </a>
                    </Link>
                    <Link href="#">
                        <a>Operators </a>
                    </Link>
                    <Link href="#">
                        <a>Arithmetic </a>
                    </Link>
                    <Link href="#">
                        <a>Functions </a>
                    </Link>
                    <Link href="#">
                        <a>Objects </a>
                    </Link>
                    <Link href="#">
                        <a>Events </a>
                    </Link>
                    <Link href="#">
                        <a>Strings & String Methods</a>
                    </Link>
                    <Link href="#">
                        <a>Numbers & Number Methods </a>
                    </Link>
                    <Link href="#">
                        <a>Arrays </a>
                    </Link>
                    <Link href="#">
                        <a>Array Methods & Iteration </a>
                    </Link>
                    <Link href="#">
                        <a>Dates </a>
                    </Link>
                    <Link href="#">
                        <a>Math </a>
                    </Link>
                    <Link href="#">
                        <a>If Else </a>
                    </Link>
                    <Link href="#">
                        <a>Switch </a>
                    </Link>
                    <Link href="#">
                        <a>Loops </a>
                    </Link>
                    <Link href="#">
                        <a>Maps </a>
                    </Link>
                    <Link href="#">
                        <a>Errors </a>
                    </Link>
                    <Link href="#">
                        <a>Arrow Function </a>
                    </Link>
                    <Link href="#">
                        <a>Classes </a>
                    </Link>
                    <h2>JavaScript Objects</h2>
                    <Link href="#">
                        <a>Definitions </a>
                    </Link>
                    <Link href="#">
                        <a>Properties </a>
                    </Link>
                    <Link href="#">
                        <a>Methods </a>
                    </Link>
                    <Link href="#">
                        <a>Display </a>
                    </Link>
                    <Link href="#">
                        <a>Constructors & Sets </a>
                    </Link>
                    <Link href="#">
                        <a>Maps </a>
                    </Link>
                    <h2>JavaScript Functions</h2>
                    <Link href="#">
                        <a>Definitions </a>
                    </Link>
                    <Link href="#">
                        <a>Parameters </a>
                    </Link>
                    <Link href="#">
                        <a>Invocation </a>
                    </Link>
                    <Link href="#">
                        <a>Call </a>
                    </Link>
                    <Link href="#">
                        <a>Apply </a>
                    </Link>
                    <h2>JavaScript Classes</h2>
                    <Link href="#">
                        <a>Intro </a>
                    </Link>
                    <Link href="#">
                        <a>Inheritance </a>
                    </Link>
                    <Link href="#">
                        <a>Static </a>
                    </Link>
                    <h2>JavaScript Examples</h2>
                    <Link href="#">
                        <a>Examples </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LeftSidebar;