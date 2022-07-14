import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import vidformats from "../../../jsons/tutorials/html/vidformats.json"
import medtyp from "../../../jsons/tutorials/html/mediatypes.json"
import vidtag from "../../../jsons/tutorials/html/vidtags.json"


const Video = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;


    // <span className={styles.exptag}>

    return (
        <>
            <Head>
                <title>HTML Video | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Video</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/media">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/audio">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>

                    <h2>The HTML &lt;video&gt; Element</h2>
                    <p>To show a video in HTML, use the <span className={styles.exptag}>&lt;video&gt;</span> element:</p>
                    <div className="embedDiv">
                        <iframe height="350" style={{ "width": "75%" }}
                            scrolling="no" title="The HTML &lt;video&gt; Element" src="https://codepen.io/_michaeli/embed/ZExWmvE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/ZExWmvE"><a>
                                The HTML &lt;video&gt; Element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <h2>How it Works</h2>
                    <p>The <span className={styles.exptag}>controls</span> attribute adds video controls, like play, pause, and volume.</p>
                    <p>It is a good idea to always include <span className={styles.exptag}>width</span> and <span className={styles.exptag}>height</span> attributes. If height and width are not set, the page
                        might flicker while the video loads.</p>
                    <p>The <span className={styles.exptag}>&lt;source&gt;</span> element allows you to specify alternative video
                        files which the browser may choose from. The browser will use the first recognized format.</p>
                    <p>The text between the <span className={styles.exptag}>&lt;video&gt;</span> and <span className={styles.exptag}>&lt;/video&gt;</span> tags will only be displayed
                        in browsers that do not
                        support the <span className={styles.exptag}>&lt;video&gt;</span> element.</p>

                    <h2>HTML &lt;video&gt; Autoplay</h2>
                    <p>To start a video automatically, use the <span className={styles.exptag}>autoplay</span> attribute:</p>
                    <p>Add <span className={styles.exptag}>muted</span> after <span className={styles.exptag}> autoplay</span> to let your video start playing automatically (but muted):</p>
                    <p><strong>Note:</strong> Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.</p>

                    <div className="embedDiv">
                        <iframe height="350" style={{ "width": "75%" }}
                            scrolling="no" title="Autoplay and AutoplayMuted" src="https://codepen.io/_michaeli/embed/ExEKOpy?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/ExEKOpy"><a>
                                Autoplay and AutoplayMuted</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Browser Support</h2>
                        <p>The numbers in the table specify the first browser version that fully supports the
                            <span className={styles.exptag}>&lt;video&gt;</span> element.</p>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Element</th>
                                <th>Chrome</th>
                                <th>Internet Explorer / Edge</th>
                                <th>Firefox</th>
                                <th>Safari</th>
                                <th>Opera</th>
                            </tr>
                            <tr>
                                <td>&lt;video&gt;</td>
                                <td>4.0</td>
                                <td>9.0</td>
                                <td>3.5</td>
                                <td>4.0</td>
                                <td>10.5</td>
                            </tr>
                        </table>
                    </div>
                    <h2>HTML Video Formats</h2>
                    <p>There are three supported video formats: MP4, WebM, and Ogg. The browser support for the different formats is:</p>

                    <table className={styles.reftable}>
                        <tr>
                            <th>Browser</th>
                            <th>MP4</th>
                            <th>WebM</th>
                            <th>Ogg</th>
                        </tr>
                        {vidformats.map(vidformats => (
                            <tr key={vidformats.id}>
                                <td>{vidformats['Browser']}</td>
                                <td>{vidformats['MP4']}</td>
                                <td>{vidformats['WebM']}</td>
                                <td>{vidformats['Ogg']}</td>
                            </tr>
                        ))}
                    </table>

                    <h2>HTML Video - Media Types</h2>
                    <table className={styles.reftable}>
                        <tr>
                            <th>File Format</th>
                            <th>Media Type</th>
                        </tr>
                        {medtyp.map(medtyp => (
                            <tr key={medtyp.id}>
                                <td>{medtyp['File Format']}</td>
                                <td>{medtyp['Media Type']}</td>
                            </tr>
                        ))}
                    </table>
                    <h2>HTML Video - Methods, Properties, and Events</h2>
                    <p>The HTML DOM defines methods, properties, and events for the <span className={styles.exptag}>&lt;video&gt;</span> element.</p>
                    <p>This allows you to load, play, and pause videos, as well as setting duration and volume.</p>
                    <p>There are also DOM events that can notify you when a video begins to play, is paused, etc.</p>
                    <div className={styles.extraborder}>
                        <h2>HTML Video Tags</h2>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                            </tr>
                            {vidtag.map(vidtag => (
                                <tr key={vidtag.id}>
                                    <td>{vidtag['Tag']}</td>
                                    <td>{vidtag['Description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>

                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Video;