import Link from 'next/link'
import styles from "../../styles/navbar.module.css"


const NavExc = (props) => {

    const exercises = props.exercises

    return (
        <>
            <div>
                <Link href="/exercises/html/">
                    <a><h3 onClick={exercises}>HTML Exercise</h3></a>
                </Link>
                <Link href="/exercises/css/">
                    <a><h3 onClick={exercises}>CSS Exercise</h3></a>
                </Link>
                <Link href="/exercises/javascript/">
                    <a><h3 onClick={exercises}>JavaScript Exercise</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavExc;