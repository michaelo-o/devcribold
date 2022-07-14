import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const Colors = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Colors | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Colors</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <p >CSS supports 140+ color names, HEX values, RGB values, RGBA
                        values, HSL values, HSLA values, and opacity.</p>

                    <h2>RGBA Colors</h2>
                    <p>RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity
                        for a color.</p>
                    <p>An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0
                        (fully transparent) and 1.0 (fully opaque).</p>

                    <div style={{ "background": "rgba(255, 0, 0, 0.2)", "padding": "18px" }}>rgba(255, 0, 0, 0.2);</div>
                    <div style={{ "background": "rgba(255, 0, 0, 0.4)", "padding": "18px" }}>rgba(255, 0, 0, 0.4);</div>
                    <div style={{ "background": "rgba(255, 0, 0, 0.6)", "padding": "18px" }}>rgba(255, 0, 0, 0.6);</div>
                    <div style={{ "background": "rgba(255, 0, 0, 0.8)", "padding": "18px" }}>rgba(255, 0, 0, 0.8);</div>

                    <p>The following example defines different RGBA colors:</p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="700" style={{ "width": "80%" }}
                                scrolling="no" title="CSS RWD" src="https://codepen.io/_michaeli/embed/JjLKmoB?default-tab=css&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLKmoB"><a>
                                    CSS RWD</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
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

export default Colors;