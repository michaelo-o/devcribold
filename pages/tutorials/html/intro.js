import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import taglist from "../../../jsons/tutorials/html/taglist.json"
import history from "../../../jsons/tutorials/html/html history.json"

const Introdution = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;

    return (
        <>
            <Head>
                <title>HTML Introduction | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Introduction</h1>
                    <h3>HTML is the standard markup language for creating Web pages.</h3>
                    <div className={styles.extraborder}>
                        <h2>What is HTML?</h2>
                        <ul>
                            <li>HTML stands for Hyper Text Markup Language</li>
                            <li>HTML is the standard markup language for creating Web pages</li>
                            <li>HTML describes the structure of a Web page</li>
                            <li>HTML consists of a series of elements</li>
                            <li>HTML elements tell the browser how to display the content</li>
                            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                        </ul>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>A Simple HTML Document</h2>
                        <div className="embedDiv">
                            <iframe height="350" style={{ width: 1100 }}
                                scrolling="no" title="Html Example" src="https://codepen.io/_michaeli/embed/jOzqLMW?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/jOzqLMW"><a>
                                    Html Example</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                        <h3>Example Explained</h3>
                        <ul>
                            <li>The <span className={styles.exptag}>&lt;!DOCTYPE html&gt;</span> declaration defines that this document is an HTML5 document </li>
                            <li>The <span className={styles.exptag}>&lt;html&gt;</span> element is the root element of an HTML page</li>
                            <li>The <span className={styles.exptag}>&lt;head&gt;</span> element contains meta information about the HTML page </li>
                            <li>The <span className={styles.exptag}>&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab) </li>
                            <li> The <span className={styles.exptag}>&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. </li>
                            <li> The <span className={styles.exptag}>&lt;h1&gt;</span> element defines a large heading </li>
                            <li>The <span className={styles.exptag}>&lt;p&gt;</span> element defines a paragraph </li>
                        </ul>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>What is an HTML Element?</h2>
                        <p>An HTML element is defined by a start tag, some content, and an end tag:</p>

                        <h3 className="inlinehtml">
                            {bro}tagname{brc}<span>Content goes here...</span>{bro}/tagname{brc}
                        </h3>
                        <br />
                        <p>The HTML element is everything from the start tag to the end tag:</p>
                        <h3 className="inlinehtml">
                            {bro}h1{brc}<span>My First Heading</span>{bro}/h1{brc}
                        </h3>
                        <h3 className="inlinehtml">
                            {bro}p{brc}<span>My First Parragraph</span>{bro}/p{brc}
                        </h3>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Start Tag</th>
                                <th>Element Content</th>
                                <th>End Tag</th>
                            </tr>
                            {taglist.map(taglist => (
                                <tr key={taglist.id}>
                                    <td>{taglist['Start tag']}</td>
                                    <td>{taglist['Element content']}</td>
                                    <td>{taglist['End tag']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Web Browsers</h2>
                        <p>The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly. <br />
                            A browser does not display the HTML tags, but uses them to determine how to display the document:</p>
                        <Image src="/img_chrome.png" width={600} height={350} />
                    </div>
                    <h2>HTML History</h2>
                    <p>Since the early days of the World Wide Web, there have been many versions of HTML:</p>
                    <table className={styles.reftable}>
                        <tr>
                            <th>Year Tag</th>
                            <th>Version</th>
                        </tr>
                        {history.map(history => (
                            <tr key={history.id}>
                                <td>{history['Year']}</td>
                                <td>{history['Version']}</td>
                            </tr>
                        ))}
                    </table>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Introdution;