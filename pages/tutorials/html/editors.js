import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import targetattr from "../../../jsons/tutorials/html/targetattr.json"

const Editors = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;


    // <span className={styles.exptag}>&lt;form&gt;</span>

    return (
        <>
            <Head>
                <title>HTML Editors | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML Editors</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/intro">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/basic">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                    <p>A simple text editor is all you need to learn HTML.</p>
                     

                    <h2>Learn HTML Using Notepad or TextEdit</h2>
                    <p>Web pages can be created and modified by using professional HTML editors.</p>
                    <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
                    <p>We believe in that using a simple text editor is a good way to learn HTML.</p>
                    <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
                     

                    <h2>Step 1: Open Notepad (PC)</h2>
                    <p><strong>Windows 8 or later:</strong></p>
                    <p>Open the <strong>Start Screen</strong> (the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>.</p>
                    <p><strong>Windows 7 or earlier:</strong></p>
                    <p>Open <strong>Start</strong> &gt;<strong>
                        Programs &gt;</strong> <strong>Accessories &gt;</strong> <strong>Notepad</strong></p>
                     

                    <h2>Step 1: Open TextEdit (Mac)</h2>
                    <p>Open <strong>Finder &gt; Applications &gt; TextEdit</strong></p>
                    <p>Also change some preferences to get the application to
                        save files correctly.
                        <span>In </span><strong>Preferences &gt; Format &gt;
                        </strong>choose<strong> &quot;Plain Text&quot;</strong></p>
                    <p>Then under &quot;Open and Save&quot;, check the box that says &quot;Display HTML files as HTML code instead of formatted text&quot;.</p>
                    <p style={{ "fontWeight": "700" }}><strong>Then open a new document to place the code.</strong></p>
                     

                    <h2>Step 2: Write Some HTML</h2>
                    <p>Write or copy the following HTML code into Notepad:</p>
                    <div className={styles.extraborder}>
                        <h3>HTML Document</h3>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="HTMLDocument" src="https://codepen.io/_michaeli/embed/zYWqeJX?default-tab=html&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/zYWqeJX"><a>
                                    HtmlDocument</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <p><Image alt="Notepad" src="/img_notepad.png" width={600} height={350} /></p>
                     

                     
                    <h2>Step 3: Save the HTML Page</h2>
                    <p>Save the file on your computer. Select <strong>File &gt; Save as</strong> in the Notepad menu.</p>
                    <p>Name the file <strong>&quot;index.htm&quot;</strong> and set the encoding to
                        <strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>
                    <p><Image alt="View in Browser" width={631} height={200} src="/img_saveas.png" /></p>

                    <p><strong>Tip:</strong> You can use either .htm or .html as file extension. There is no difference, it is up to you.</p>
                     

                    <h2>Step 4: View the HTML Page in Your Browser</h2>
                    <p>Open the saved HTML file in your favorite browser (double click on the file,
                        or right-click - and choose &quot;Open with&quot;).</p>
                    <p>The result will look much like this:</p>
                    <p><Image alt="View in Browser" src="/img_chrome.png" width={600} height={350} /></p>





                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Editors;