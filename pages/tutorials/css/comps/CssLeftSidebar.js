import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../../leftsidebar.module.css"


const CssLeftSidebar = () => {



    return (
        <>
            <div className={styles.leftsidebar}>
                <div className={styles.lfsbcont}>
                    <h2>CSS Tutorial</h2>
                    <Link href="/tutorials/css/">
                        <a>CSS Home</a>
                    </Link>
                    <h2>CSS Basic</h2>
                    <Link href="/tutorials/css/intro">
                        <a>Introduction </a>
                    </Link>
                    <Link href="/tutorials/css/syntax">
                        <a>Syntax </a>
                    </Link>
                    <Link href="/tutorials/css/selectors">
                        <a>Selectors </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>How To </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Comments </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Colors </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Backgrounds </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Borders </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Margins </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Padding </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Comments </a>
                    </Link>
                    <Link href="/tutorials/css/colors">
                        <a>Colors </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Height/Width</a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Box Model </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Outline </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Text </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Fonts </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Icons </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Links </a>
                    </Link>
                    <Link href="#">
                        <a>Lists & Tables </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Max-width </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Position </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Z-index </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Navigation Bar </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Dropdowns </a>
                    </Link>
                    <Link href="/tutorials/css/forms">
                        <a>Forms </a>
                    </Link>
                    <h2>CSS Advanced</h2>
                    <Link href="/tutorials/css/roundedcorners">
                        <a>Rounded Corners </a>
                    </Link>
                    <Link href="/tutorials/css/borderimages">
                        <a>Border Images </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Backgrounds </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Colors </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Gradients </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Shadows </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>2D Transforms</a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>3D Transforms </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Transitions </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Animations </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Flexbox </a>
                    </Link>
                    <h2>CSS Responsive</h2>
                    <Link href="/tutorials/css/rwd">
                        <a>Intro & Viewport </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Grid View </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Media Queries </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Images & Videos </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Frameworks </a>
                    </Link>
                    <h2>CSS Grid</h2>
                    <Link href="/tutorials/css/tutorial">
                        <a>Intro </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Grid Container </a>
                    </Link>
                    <Link href="/tutorials/css/tutorial">
                        <a>Grid Item </a>
                    </Link>
                    <h2>CSS Examples</h2>
                    <Link href="/tutorials/css/tutorial">
                        <a>Examples</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CssLeftSidebar;