import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const CssSyntax = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Syntax | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

 <h1>CSS Syntax</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/intro">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/selectors">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                   
                    <h2>CSS Syntax</h2>
                        <p><Image src="/img_selector.gif" alt="CSS selector" width={569} height={119} /></p>
                    <p>The selector points to the HTML element you want to style.</p>
                    <p>The declaration block contains one or more declarations separated by
                        semicolons.</p>
                    <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
                    <p>Multiple CSS declarations are separated with semicolons, and declaration
                        blocks are surrounded by curly braces.</p>
                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Example2" src="https://codepen.io/_michaeli/embed/KKoMBbY?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/KKoMBbY"><a>
                                    CSS Example2</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <h3>Example Explained</h3>
                    <ul>
                        <li><span className={styles.exptag}>p</span> is a selector in CSS (it points to the HTML element you want to style:
                            &lt;p&gt;).</li>
                        <li><span className={styles.exptag}>color</span> is a property, and <span className={styles.exptag}>red</span> is the property value</li>
                        <li><span className={styles.exptag}>text-align</span> is a property, and <span className={styles.exptag}>center</span> is the property value</li>
                    </ul>
                        <p>You will learn much more about CSS selectors and CSS properties in the next chapters!</p>

                    <PageContentFooter />
                </div>
            </div>
        </>
    );
}

export default CssSyntax;