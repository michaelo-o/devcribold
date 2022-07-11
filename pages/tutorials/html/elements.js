import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import targetattr from "../../../jsons/tutorials/html/targetattr.json"

const Elements = () => {

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
                <title>HTML Elements | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML  Elements</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/basic">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/attributes">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                    <p>An HTML element is defined by a start tag, some content, and an
                        end tag.</p>


                    <h2>HTML Elements</h2>

                    <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>

                    <h3 className="inlinehtml">
                        {bro}tagname{brc}<span>Content goes here...</span>{bro}/tagname{brc}
                    </h3>
                    <br />
                    <p>Examples of some HTML elements;</p>
                    <h3 className="inlinehtml">
                        {bro}h1{brc}<span>My First Heading</span>{bro}/h1{brc}
                    </h3>
                    <h3 className="inlinehtml">
                        {bro}p{brc}<span>My First Parragraph</span>{bro}/p{brc}
                    </h3>

                    <table className={styles.reftable}>
                        <tr>
                            <th>Start tag</th>
                            <th>Element content</th>
                            <th>End tag</th>
                        </tr>
                        <tr>
                            <td>&lt;h1&gt;</td>
                            <td>My First Heading</td>
                            <td>&lt;/h1&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;p&gt;</td>
                            <td>My first paragraph.</td>
                            <td>&lt;/p&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;br&gt;</td>
                            <td><em>none</em></td>
                            <td><em>none</em></td>
                        </tr>
                    </table>

                    <p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt;
                        element). These elements are called empty elements. Empty elements do not have an end tag!</p>

                    <h2>Nested HTML Elements</h2>
                    <p>HTML elements can be nested (this means that elements can contain other elements).</p>
                    <p>All HTML documents consist of nested HTML elements.</p>
                    <p>The following example contains four HTML elements (<span className={styles.exptag}>&lt;html&gt;</span>, <span className={styles.exptag}>&lt;body&gt;</span>, <span className={styles.exptag}>&lt;h1&gt;</span>
                        and <span className={styles.exptag}>&lt;p&gt;</span>):</p>

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


                    <h3>Example Explained</h3>
                    <p>The <span className={styles.exptag}>&lt;html&gt;</span> element is the root element
                        and it defines the whole HTML document.</p>
                    <p>It has a start tag <span className={styles.exptag}>&lt;html&gt;</span> and an end tag <span className={styles.exptag}>&lt;/html&gt;</span>.</p>
                    <p>Then, inside the <span className={styles.exptag}>&lt;html&gt;</span> element there is
                        a <span className={styles.exptag}>&lt;body&gt;</span>
                        element:</p>


                    <p>The <span className={styles.exptag}>&lt;body&gt;</span> element defines the
                        document&apos;s body.</p>
                    <p>It has a start tag <span className={styles.exptag}>&lt;body&gt;</span> and an end tag <span className={styles.exptag}>&lt;/body&gt;</span>.</p>
                    <p>Then, inside the <span className={styles.exptag}>&lt;body&gt;</span> element there
                        are two other elements:
                        <span className={styles.exptag}>&lt;h1&gt;</span> and <span className={styles.exptag}>
                            &lt;p&gt;</span>:</p>

                    <p>The <span className={styles.exptag}>&lt;h1&gt;</span> element defines a heading.</p>
                    <p>It has a start tag <span className={styles.exptag}>&lt;h1&gt;</span> and an end tag <span className={styles.exptag}>&lt;/h1&gt;</span>:</p>


                    <p>The <span className={styles.exptag}>&lt;p&gt;</span> element defines a paragraph.</p>
                    <p>It has a start tag <span className={styles.exptag}>&lt;p&gt;</span> and an end tag <span className={styles.exptag}>&lt;/p&gt;</span>:</p>



                    <h2>Never Skip the End Tag</h2>
                    <p>Some HTML elements will display correctly, even if you forget the end tag:</p>


                    <p><strong>However, never rely on this! Unexpected results and errors may occur if you forget the end tag!</strong></p>


                    <h2>Empty HTML Elements</h2>
                    <p>HTML elements with no content are called empty elements.</p>
                    <p>The <span className={styles.exptag}>&lt;br&gt;</span> tag defines a line break, and
                        is an empty element without a closing tag:</p>



                    <h2>HTML is Not Case Sensitive</h2>
                    <p>HTML tags are not case sensitive: <span className={styles.exptag}>&lt;P&gt;</span> means the same as <span className={styles.exptag}>&lt;p&gt;</span>.</p>
                    <p>The HTML standard does not require lowercase tags, but W3C
                        <b>recommends</b> lowercase in HTML, and <b>demands</b> lowercase for stricter document types like XHTML.</p>



                    <h2>HTML Tag Reference</h2>
                    <p>DevCrib&apos;s tag reference contains additional information about these tags and their attributes.</p>
                    <Link href="/references/html/htmltagref">
                        <a ><h3 className={styles.graybut}>Go To HTML Tag Reference...</h3></a>
                    </Link>




                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Elements;