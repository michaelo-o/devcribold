import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports


const YouTube = () => {

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
                <title>HTML YouTube Videos | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML YouTube Videos</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/plugins">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/examples">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>
                    <div className={styles.extraborder}>
                        <p>The easiest way to play videos in HTML, is to use YouTube.</p>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Struggling with Video Formats?</h2>
                        <p>Converting videos to different formats can be difficult and time-consuming.</p>
                        <p>An easier solution is to let YouTube play the videos in your web page.</p>

                    </div>
                    <div className={styles.extraborder}>

                        <h2>YouTube Video Id</h2>
                        <p>YouTube will display an id (like tgbNymZ7vqY), when you save (or play) a video.</p>
                        <p>You can use this id, and refer to your video in the HTML code.</p>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Playing a YouTube Video in HTML</h2>
                        <p>To play your video on a web page, do the following:</p>
                        <p>
                            <ul>
                                <li>Upload the video to YouTube</li>
                                <li>Take a note of the video id</li>
                                <li>Define an  <span className={styles.exptag}>&lt;iframe&gt;</span> element in your web page</li>
                                <li>Let the  <span className={styles.exptag}>src</span> attribute point to the video URL</li>
                                <li>Use the  <span className={styles.exptag}>width</span> and  <span className={styles.exptag}>
                                    height</span> attributes to specify the dimension of the player</li>
                                <li>Add any other parameters to the URL (see below)</li>
                            </ul>
                        </p>

                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="HTML Youtube" src="https://codepen.io/_michaeli/embed/MWVyLWO?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/MWVyLWO"><a>
                                    HTML Youtube</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>

                    </div>
                    <div className={styles.extraborder}>

                        <h2>YouTube Autoplay + Mute</h2>
                        <p>You can let your video start playing automatically when a user visits the
                            page, by adding  <span className={styles.exptag}>autoplay=1</span> to the YouTube URL.
                            However, automatically starting a video is annoying for your visitors!</p>

                            <p><strong>Note:</strong> Chromium browsers do not
                                allow autoplay in most cases. However, muted autoplay is always allowed.</p>

                        <p>Add  <span className={styles.exptag}>mute=1</span> after  <span className={styles.exptag}>
                            autoplay=1</span> to let your video start playing automatically (but muted).</p>

                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Autoplay+mute" src="https://codepen.io/_michaeli/embed/mdxPvwV?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/mdxPvwV"><a>
                                    Autoplay+mute</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>YouTube Playlist</h2>
                        <p>A comma separated list of videos to play (in addition to the original URL).</p>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>YouTube Loop</h2>
                        <p>Add  <span className={styles.exptag}>loop=1</span> to let your video loop forever.</p>

                        <p>Value 0 (default): The video will play only once.</p>
                        <p>Value 1: The video will loop (forever).</p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="YoutubeLoop" src="https://codepen.io/_michaeli/embed/ZExWwyR?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/ZExWwyR"><a>
                                    YoutubeLoop</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>YouTube Controls</h2>
                        <p>Add  <span className={styles.exptag}>controls=0</span> to not display controls in the
                            video player.</p>

                        <p>Value 0: Player controls does not display.</p>
                        <p>Value 1 (default): Player controls display.</p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="YouTubeControls" src="https://codepen.io/_michaeli/embed/WNzwPEE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/WNzwPEE"><a>
                                    YouTubeControls</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default YouTube;