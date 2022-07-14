import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const CssIntro = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Introduction | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Introduction</h1>
                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/syntax">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <h3>CSS is the language we use to style a Web page.</h3>
                    <div className={styles.extraborder}>
                        <h2>What is CSS?</h2>
                        <ul>
                            <li>CSS stands for Cascading Style Sheets</li>
                            <li>CSS describes how HTML elements are to be displayed on screen,
                                paper, or in other media</li>
                            <li>CSS saves a lot of work. It can control the layout of
                                multiple web pages all at once</li>
                            <li>External stylesheets are stored in CSS files</li>
                        </ul>
                    </div>
                    <h2>Why Use CSS?</h2>
                    <p>CSS is used to define styles for your web pages, including the design, layout
                        and variations in display for different devices and screen sizes.</p>
                    <div className="embedDiv">
                        <iframe height="350" style={{ "width": "75%" }}
                            scrolling="no" title="CSS Example" src="https://codepen.io/_michaeli/embed/mdxELvg?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/mdxELvg"><a>
                                CSS Example</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <h2>CSS Solved a Big Problem</h2>
                    <p>HTML was NEVER intended to contain tags for formatting a web page!</p>
                    <p>HTML was
                        created to describe the content of a web page, like:</p>
                    <p>&lt;h1&gt;This is a heading&lt;/h1&gt;</p>
                    <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
                    <p>When tags like &lt;font&gt;, and color attributes were added to the HTML 3.2
                        specification, it started a nightmare for web developers. Development of large
                        websites, where fonts and color information were added to every single
                        page, became a long and expensive process.</p>
                    <p>To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p>
                    <p>CSS removed the style formatting from the HTML page!</p>
                        <p>If you don&apos;t know what HTML is, we suggest that you read our <a href="/html/default.asp">HTML Tutorial</a>.</p>


                    <h2>CSS Saves a Lot of Work!</h2>
                    <p>The style definitions are normally saved in external .css files.</p>
                    <p>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>

                    <PageContentFooter />
                </div>
            </div>
        </>
    );
}

export default CssIntro;