import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../tutorialgeneral.module.css"
import StickyNav from "./comps/StickyNav";
import JsLeftSidebar from "./comps/JsLeftSidebar";
import PageContentFooter from "../../../components/PageContentFooter";


const JsIntro = () => {



    return (
        <>
            <Head>
                <title>JavaScript Introduction | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <JsLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>JavaScript Introduction</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/javascript/">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/javascript/tutorial">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <div className={styles.extraborder}>
                        <p>This page contains some examples of what JavaScript can do.</p>
                    </div>

                    <div className={styles.extraborder}>
                        <h2>JavaScript Can Change HTML Content</h2>
                        <p>One of many JavaScript HTML methods is <span className={styles.exptag}>getElementById()</span>.</p>
                        <p>The example below &quot;finds&quot; an HTML element (with id=&quot;demo&quot;),
                            and changes the element content (innerHTML) to &quot;Hello JavaScript&quot;:</p>


                        <p>JavaScript accepts both double and single quotes:</p>
                    </div>


                    <div className={styles.extraborder}>

                        <h2>JavaScript Can Change HTML Attribute Values</h2>
                        <p>In this example JavaScript changes the value of the <span className={styles.exptag}>src</span> (source) attribute of an <span className={styles.exptag}>&lt;img&gt;</span> tag:</p>
                    </div>

                    <div className={styles.extraborder}>

                        <h2>JavaScript Can Change HTML Styles (CSS)</h2>
                        <p>Changing the style of an HTML element, is a variant of changing an HTML
                            attribute:</p>
                    </div>

                    <div className={styles.extraborder}>

                        <h2>JavaScript Can Hide HTML Elements</h2>
                        <p>Hiding HTML elements can be done by changing the <span className={styles.exptag}>display</span> style:</p>
                    </div>

                    <div className={styles.extraborder}>

                        <h2>JavaScript Can Show HTML Elements</h2>
                        <p>Showing hidden HTML elements can also be done by changing the <span className={styles.exptag}>display</span> style:</p>
                    </div>
                    <div className={styles.extraborder}>

                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="JavaScript Examples" src="https://codepen.io/_michaeli/embed/mdxrONP?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/mdxrONP"><a>
                                    JavaScript Examples</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <h2>Did You Know?</h2>
                    <p>JavaScript and Java are completely different languages, both in concept
                        and design.</p>
                    <p>JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard
                        in 1997.</p>
                    <p>ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.
                    </p>

                    <PageContentFooter />
                </div>



            </div>
        </>
    );
}

export default JsIntro;