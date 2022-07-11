import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const LearnCss = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>CSS Tutorial</h1>
                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/intro">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <div className={styles.extraborder}>
                        <p className={styles.lightbackground}>
                            CSS is the language we use to style an HTML document.<br /> <br />
                            CSS describes how HTML elements should be displayed.<br /> <br />
                            This tutorial will teach you CSS from basic to advanced.
                        </p>
                    </div>
                    <h2>Easy Learning with Embedded &quot;Codepen&quot; Editor</h2>
                    <p>The Embedded Editor makes it easy for you to edit the HTML code and view the resuilt without having to leave the website. <br />
                        <span className={styles.boldtext}>Note</span>: Edits made in the embedded code are not permanent and would be cleared upon refreshing the page.
                    </p>
                    <div className="embedDiv">
                        <iframe height="350" style={{ "width": "75%" }}
                            scrolling="no" title="CSS Example" src="https://codepen.io/_michaeli/embed/mdxELvg?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/mdxELvg"><a>
                                CSS Example</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>CSS Examples</h2>
                        <p> In this CSS tutorial, you will find multiple examples. With the embedded code editor, you can edit and test each example yourself!</p>
                        <Link href="/tutorials/css/examples">
                            <a ><h3 className={styles.graybut}>Go To CSS Examples...</h3></a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>CSS Excercise</h2>
                        <p>DevCrib contains an excercise for you to test yourself with.</p>
                        <Link href="/excercises/css">
                            <a ><h3 className={styles.graybut}>Go To CSS Excercise...</h3></a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>CSS References</h2>
                        <p> At DevCrib, you will find complete references about CSS elements, attributes, events, color names, browser support, and more:</p>
                        <Link href="/references/css/csspropref">
                            <a ><h3 className={styles.graybut}>Go To CSS References...</h3></a>
                        </Link>
                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default LearnCss;