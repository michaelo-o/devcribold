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




                    <h2>The &lt;script&gt; Tag</h2>
                    <p>
                        In HTML, JavaScript code is inserted between{" "}
                        <span className={styles.exptag}>&lt;script&gt;</span> and{" "}
                        <span className={styles.exptag}>&lt;/script&gt;</span> tags.
                    </p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="DemoJSINBody" src="https://codepen.io/_michaeli/embed/YzaOONg?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/YzaOONg"><a>
                                    JavaScript Examples</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <hr />
                    <h2>JavaScript Functions and Events</h2>
                    <p>
                        A JavaScript <span className={styles.exptag}>function</span> is a block of
                        JavaScript code, that can be executed when &quot;called&quot; for.
                    </p>
                    <p>
                        For example, a function can be called when an <b>event</b> occurs, like when
                        the user clicks a button.
                    </p>


                    <hr />
                    <h2>JavaScript in &lt;head&gt; or &lt;body&gt;</h2>
                    <p>You can place any number of scripts in an HTML document.</p>
                    <p>
                        Scripts can be placed in the{" "}
                        <span className={styles.exptag}>&lt;body&gt;</span>, or in the{" "}
                        <span className={styles.exptag}>&lt;head&gt;</span> section of an HTML page,
                        or in both.
                    </p>
                    <hr />
                    <h2>JavaScript in &lt;head&gt;</h2>
                    <p>
                        In this example, a JavaScript <span className={styles.exptag}>function</span>{" "}
                        is placed in the <span className={styles.exptag}>&lt;head&gt;</span> section
                        of an HTML page.
                    </p>
                    <p>The function is invoked (called) when a button is clicked:</p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Demo Js in Head" src="https://codepen.io/_michaeli/embed/YzaOOZg?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/YzaOONg"><a>
                                    JavaScript Examples</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <h2>JavaScript in &lt;body&gt;</h2>
                    <p>
                        In this example, a JavaScript <span className={styles.exptag}>function</span>{" "}
                        is placed in the <span className={styles.exptag}>&lt;body&gt;</span> section
                        of an HTML page.
                    </p>
                    <p>The function is invoked (called) when a button is clicked:</p>





                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Demo Js in Body" src="https://codepen.io/_michaeli/embed/yLKxxVM?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/yLKxxVM"><a>
                                    JavaScript Examples</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>



                    <PageContentFooter />
                </div>



            </div>
        </>
    );
}

export default JsIntro;