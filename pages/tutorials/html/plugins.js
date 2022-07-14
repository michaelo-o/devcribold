import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import audformats from "../../../jsons/tutorials/html/audformats.json"
import audtyp from "../../../jsons/tutorials/html/audtypes.json"
import audtag from "../../../jsons/tutorials/html/audtags.json"


const Plugins = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;


    // <span class={styles.exptag}>

    return (
        <>
            <Head>
                <title>HTML Plug-ins | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Plug-ins</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/audio">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/youtube">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Plug-ins</h2>
                        <p>Plug-ins were designed to be used for many different purposes:</p>
                        <ul>
                            <li>To run Java applets</li>
                            <li>To run Microsoft ActiveX controls</li>
                            <li>To display Flash movies</li>
                            <li>To display maps</li>
                            <li>To scan for viruses</li>
                            <li>To verify a bank id</li>
                        </ul>
                        <div className={styles.graybut}>
                            <p style={{ "color": "red" }}><b>Warning !</b></p>
                            <p>Most browsers no longer support Java Applets and Plug-ins.</p>
                            <p>ActiveX controls are no longer supported in any browsers.</p>
                            <p>The support for Shockwave Flash has also been turned off in modern browsers.</p>
                        </div>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>The &lt;object&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;object&gt;</span> element is supported by all browsers.</p>
                        <p>The <span className={styles.exptag}>&lt;object&gt;</span> element defines an embedded object within an HTML document.</p>
                        <p>It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages,
                            but can also be used to include HTML in HTML. Images can also be included if you like.</p>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="The &lt;object&gt; Element" src="https://codepen.io/_michaeli/embed/rNdeoRp?default-tab=html&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/rNdeoRp"><a>
                                    The &lt;object&gt; Element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>

                    </div>
                    <div className={styles.extraborder}>

                        <h2>The &lt;embed&gt; Element</h2>

                        <p>The <span className={styles.exptag}>&lt;embed&gt;</span> element is supported in all major browsers.</p>
                        <p>The <span className={styles.exptag}>&lt;embed&gt;</span> element also defines an embedded object within an HTML document.</p>
                        <p>Web browsers have supported the &lt;embed&gt; element for a
                            long time. However, it has not been a part of the HTML
                            specification before HTML5.</p>
                        <p>The <span className={styles.exptag}>&lt;embed&gt;</span> element can also be used to include HTML in HTML:</p>

                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="The &lt;embed&gt; Element" src="https://codepen.io/_michaeli/embed/VwXagZO?default-tab=html&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/VwXagZO"><a>
                                    The &lt;embed&gt; Element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>


                            <p><strong>Note</strong> that the &lt;embed&gt; element does not have a closing tag. It can not
                                contain alternative text.</p>

                        <p>The <span className={styles.exptag}>&lt;embed&gt;</span> element can also be used to include HTML in HTML:</p>

                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Plugins;