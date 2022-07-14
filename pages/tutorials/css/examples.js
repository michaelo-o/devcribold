import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";
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
                <title>CSS Examples | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />
                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Examples</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                    </div>
                    <h3>Multiple CSS Layout Templates have been provided, courtesy of W3Schools.com</h3>
                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Template with Flexbox 1" src="https://codepen.io/_michaeli/embed/dympORr?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/dympORr"><a>
                                    CSS Template with Flexbox 1</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Template with Flexbox 2" src="https://codepen.io/_michaeli/embed/vYRXyJq?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/vYRXyJq"><a>
                                    CSS Template with Flexbox 2</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "75%" }}
                                scrolling="no" title="Css Template 1" src="https://codepen.io/_michaeli/embed/XWEjNeq?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/XWEjNeq"><a>
                                    Css Template 1</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "75%" }}
                                scrolling="no" title="Css Template 2" src="https://codepen.io/_michaeli/embed/BarLQJK?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/BarLQJK"><a>
                                    Css Template 2</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
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