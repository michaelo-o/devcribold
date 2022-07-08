import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports



const LearnHtml = () => {

    // HTML ANGLE BRACKET

    const BrO = <span className="tagcolor">&lt;</span>;
    const BrC = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const CBrO = <span className="curlybracket">&#123;</span>;
    const CBrC = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>HTML Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Tutorial</h1>
                    <div className={styles.extraborder}>
                        <p className={styles.lightbackground}>
                            HTML is the standard markup language for Web pages. <br />  <br />
                            With HTML you can create your own Website. <br /> <br />
                            HTML is easy to learn - You will enjoy it!
                        </p>
                    </div>
                    <h2>Easy Learning with Embedded &quot;Codepen&quot; Editor</h2>
                    <p>The Embedded Editor makes it easy for you to edit the HTML code and view the resuilt without having to leave the website. <br />
                        <span className={styles.boldtext}>Note</span>: Edits made in the embedded code are not permanent and would be cleared upon refreshing the page.
                    </p>
                    <div className="embedDiv">
                        <iframe height="300" style={{ width: 1100 }}
                            scrolling="no" title="Html Example" src="https://codepen.io/_michaeli/embed/jOzqLMW?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/jOzqLMW"><a>
                                Html Example</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>HTML Examples</h2>
                        <p> In this HTML tutorial, you will find multiple examples. With the embedded code editor, you can edit and test each example yourself!</p>
                        <Link href="/tutorials/html/examples">
                            <a ><h3 className={styles.graybut}>Go To HTML Examples...</h3></a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>HTML Excercise</h2>
                        <p>DevCrib contains an excercise for you to test yourself with</p>
                        <Link href="/excercises/html">
                            <a ><h3 className={styles.graybut}>Go To HTML Excercise...</h3></a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>HTML References</h2>
                        <p> At DevCrib, you will find complete references about HTML elements, attributes, events, color names, browser support, and more:</p>
                        <Link href="/references/html/htmltagref">
                            <a ><h3 className={styles.graybut}>Go To HTML References...</h3></a>
                        </Link>
                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default LearnHtml;