import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports


const Examples = () => {

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
                <title>HTML Examples | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Examples</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/youtube">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Document</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTMLDocument" src="https://codepen.io/_michaeli/embed/zYWqeJX?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/zYWqeJX"><a>
                                    HtmlDocument</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <div className={styles.extraborder}>
                        <h3>HTML Headings</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTMLHeadings" src="https://codepen.io/_michaeli/embed/ZExWwPV?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/ZExWwPV"><a>
                                    HtmlHeadings</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Paragraphs</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTMLParagraph" src="https://codepen.io/_michaeli/embed/gOerqyW?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/gOerqyW"><a>
                                    HtmlParagraph</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Links</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTML-Links" src="https://codepen.io/_michaeli/embed/abYNXro?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/abYNXro"><a>
                                    Html-Links</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Images</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTMLImages" src="https://codepen.io/_michaeli/embed/rNdePgb?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/rNdePgb"><a>
                                    HTMLImages</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Buttons</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" ttitle="HTMLButtons" src="https://codepen.io/_michaeli/embed/YzaqBoG?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/YzaqBoG"><a>
                                    HtmlButtons</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Lists</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTML-Lists" src="https://codepen.io/_michaeli/embed/MWVyLMZ?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/MWVyLMZ"><a>
                                    Html-Lists</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML title Attribute </h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="title Attribute" src="https://codepen.io/_michaeli/embed/YzaqBmG?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/YzaqBmG"><a>
                                    title Attribute</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML href Attribute </h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="href Attribute" src="https://codepen.io/_michaeli/embed/MWVyLNZ?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/MWVyLNZ"><a>
                                    href Attribute</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Styles</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTMLStyles" src="https://codepen.io/_michaeli/embed/NWYNJKM?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/NWYNJKM"><a>
                                    HtmlStyles</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML with Inline CSS</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTML with Inline CSS" src="https://codepen.io/_michaeli/embed/RwMadwp?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/jOzqLMW"><a>
                                    HTML with Inline CSS</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML and CSS Demo</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTML and CSS Demo" src="https://codepen.io/_michaeli/embed/rNdeRNg?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/rNdeRNg"><a>
                                    Html and CSS Demo</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Tables</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTML Tables" src="https://codepen.io/_michaeli/embed/dymMrPX?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/dymMrPX"><a>
                                    Html Tables</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML FORMS</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTML FORMS" src="https://codepen.io/_michaeli/embed/JjLXzdY?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLXzdY"><a>
                                    HTML FORMS</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h3>HTML Iframes</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="Untitled" src="https://codepen.io/_michaeli/embed/eYMZXNa?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/jOzqLMW"><a>
                                    Html</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
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

export default Examples;