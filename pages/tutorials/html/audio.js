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


const Audio = () => {

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
                <title>HTML Audio | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Audio</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/video">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/plugins">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>The HTML &lt;audio&gt; Element</h2>
                        <p>To play an audio file in HTML, use the <span class={styles.exptag}>&lt;audio&gt;</span> element:</p>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "70%" }}
                                scrolling="no" title="The HTML &lt;audio&gt; Element" src="https://codepen.io/_michaeli/embed/ZExWmvE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/ZExWmvE"><a>
                                    The HTML &lt;audio&gt; Element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>How it Works</h2>
                        <p>The <span class={styles.exptag}>controls</span> attribute adds audio controls, like play, pause, and volume.</p>
                        <p>The <span class={styles.exptag}>&lt;source&gt;</span> element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.</p>
                        <p>The text between the <span class={styles.exptag}>&lt;audio&gt;</span> and <span class={styles.exptag}>&lt;/audio&gt;</span> tags will only be displayed in browsers that do not support the <span class={styles.exptag}>&lt;audio&gt;</span> element.</p>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>HTML &lt;audio&gt; Autoplay</h2>
                        <p>To start an audio file automatically, use the <span class={styles.exptag}>autoplay</span> attribute:</p>
                        <p>Add <span class={styles.exptag}>muted</span> after <span class={styles.exptag}> autoplay</span> to let your audio file start playing automatically (but muted):</p>
                        <p><strong>Note:</strong> Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.</p>

                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "70%" }}
                                scrolling="no" title="Autoplay and AutoplayMuted" src="https://codepen.io/_michaeli/embed/ExEKOpy?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/ExEKOpy"><a>
                                    Autoplay and AutoplayMuted</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Browser Support</h2>
                        <p>The numbers in the table specify the first browser version that fully supports the
                            <span class={styles.exptag}>&lt;audio&gt;</span> element.</p>
                        <table class={styles.reftable}>
                            <tr>
                                <th>Element</th>
                                <th>Chrome</th>
                                <th>Internet Explorer / Edge</th>
                                <th>Firefox</th>
                                <th>Safari</th>
                                <th>Opera</th>
                            </tr>
                            <tr>
                                <td>&lt;audio&gt;</td>
                                <td>4.0</td>
                                <td>9.0</td>
                                <td>3.5</td>
                                <td>4.0</td>
                                <td>10.5</td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>HTML Audio Formats</h2>
                        <p>There are three supported audio formats: MP3, WAV, and OGG. The browser support for the different formats is:</p>

                        <table className={styles.reftable}>
                            <tr>
                                <th>Browser</th>
                                <th>MP3</th>
                                <th>WAV</th>
                                <th>OGG</th>
                            </tr>
                            {audformats.map(audformats => (
                                <tr key={audformats.id}>
                                    <td>{audformats['Browser']}</td>
                                    <td>{audformats['MP3']}</td>
                                    <td>{audformats['WAV']}</td>
                                    <td>{audformats['OGG']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>HTML audio - Media Types</h2>
                        <table className={styles.reftable}>
                            <tr>
                                <th>File Format</th>
                                <th>Media Type</th>
                            </tr>
                            {audtyp.map(audtyp => (
                                <tr key={audtyp.id}>
                                    <td>{audtyp['File Format']}</td>
                                    <td>{audtyp['Media Type']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <h2>HTML audio - Methods, Properties, and Events</h2>
                    <p>The HTML DOM defines methods, properties, and events for the <code class="w3-codespan">&lt;audio&gt;</code> element.</p>
                    <p>This allows you to load, play, and pause audios, as well as setting duration and volume.</p>
                    <p>There are also DOM events that can notify you when a audio begins to play, is paused, etc.</p>

                    <h2>HTML Audio Tags</h2>
                    <table className={styles.reftable}>
                        <tr>
                            <th>Tag</th>
                            <th>Description</th>
                        </tr>
                        {audtag.map(audtag => (
                            <tr key={audtag.id}>
                                <td>{audtag['Tag']}</td>
                                <td>{audtag['Description']}</td>
                            </tr>
                        ))}
                    </table>

                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Audio;