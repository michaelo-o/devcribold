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
                    <Link href="#">
                        <a>Introduction </a>
                    </Link>
                    <Link href="#">
                        <a>Syntax </a>
                    </Link>
                    <Link href="#">
                        <a>Selectors </a>
                    </Link>
                    <Link href="#">
                        <a>How To </a>
                    </Link>
                    <Link href="#">
                        <a>Comments </a>
                    </Link>
                    <Link href="#">
                        <a>Colors </a>
                    </Link>
                    <Link href="#">
                        <a>Backgrounds </a>
                    </Link>
                    <Link href="#">
                        <a>Borders </a>
                    </Link>
                    <Link href="#">
                        <a>Margins </a>
                    </Link>
                    <Link href="#">
                        <a>Padding </a>
                    </Link>
                    <Link href="#">
                        <a>Comments </a>
                    </Link>
                    <Link href="#">
                        <a>Colors </a>
                    </Link>
                    <Link href="#">
                        <a>Height/Width</a>
                    </Link>
                    <Link href="#">
                        <a>Box Model </a>
                    </Link>
                    <Link href="#">
                        <a>Outline </a>
                    </Link>
                    <Link href="#">
                        <a>Text </a>
                    </Link>
                    <Link href="#">
                        <a>Fonts </a>
                    </Link>
                    <Link href="#">
                        <a>Icons </a>
                    </Link>
                    <Link href="#">
                        <a>Links </a>
                    </Link>
                    <Link href="#">
                        <a>Lists & Tables </a>
                    </Link>
                    <Link href="#">
                        <a>Max-width </a>
                    </Link>
                    <Link href="#">
                        <a>Position </a>
                    </Link>
                    <Link href="#">
                        <a>Z-index </a>
                    </Link>
                    <Link href="#">
                        <a>Navigation Bar </a>
                    </Link>
                    <Link href="#">
                        <a>Dropdowns </a>
                    </Link>
                    <Link href="#">
                        <a>Forms </a>
                    </Link>
                    <h2>CSS Advanced</h2>
                    <Link href="#">
                        <a>Rounded Corners </a>
                    </Link>
                    <Link href="#">
                        <a>Border Images </a>
                    </Link>
                    <Link href="#">
                        <a>Backgrounds </a>
                    </Link>
                    <Link href="#">
                        <a>Colors </a>
                    </Link>
                    <Link href="#">
                        <a>Gradients </a>
                    </Link>
                    <Link href="#">
                        <a>Shadows </a>
                    </Link>
                    <Link href="#">
                        <a>2D Transforms</a>
                    </Link>
                    <Link href="#">
                        <a>3D Transforms </a>
                    </Link>
                    <Link href="#">
                        <a>Transitions </a>
                    </Link>
                    <Link href="#">
                        <a>Animations </a>
                    </Link>
                    <Link href="#">
                        <a>Flexbox </a>
                    </Link>
                    <h2>CSS Responsive</h2>
                    <Link href="#">
                        <a>Intro & Viewport </a>
                    </Link>
                    <Link href="#">
                        <a>Grid View </a>
                    </Link>
                    <Link href="#">
                        <a>Media Queries </a>
                    </Link>
                    <Link href="#">
                        <a>Images & Videos </a>
                    </Link>
                    <Link href="#">
                        <a>Frameworks </a>
                    </Link>
                    <h2>CSS Grid</h2>
                    <Link href="#">
                        <a>Intro </a>
                    </Link>
                    <Link href="#">
                        <a>Grid Container </a>
                    </Link>
                    <Link href="#">
                        <a>Grid Item </a>
                    </Link>
                    <h2>CSS Examples</h2>
                    <Link href="#">
                        <a>Examples</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CssLeftSidebar;