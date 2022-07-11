import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import targetattr from "../../../jsons/tutorials/html/targetattr.json"

const Basic = () => {

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
                <title>HTML Basic | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML Basic</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/editors">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/elements">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                    <p  >In this chapter we will show some basic HTML examples.</p>
                    <p  >Don't worry if we use tags you have not learned about yet.</p>
                     

                    <h2>HTML Documents</h2>
                    <p>All HTML documents must start with a document type declaration: <span className={styles.exptag}>&lt;!DOCTYPE html&gt;</span>.</p>
                    <p>The HTML document itself begins with <span className={styles.exptag}>&lt;html&gt;</span> and ends with <span className={styles.exptag}>&lt;/html&gt;</span>.</p>
                    <p>The visible part of the HTML document is between <span className={styles.exptag}>&lt;body&gt;</span> and <span className={styles.exptag}>&lt;/body&gt;</span>. </p>
                    
                     

                    <h2>The &lt;!DOCTYPE&gt; Declaration</h2>
                    <p>The <span className={styles.exptag}>&lt;!DOCTYPE&gt;</span> declaration represents the document type, and helps browsers to display web pages correctly.</p>
                    <p>It must only appear once, at the top of the page (before any HTML tags). </p>
                    <p>The <span className={styles.exptag}>&lt;!DOCTYPE&gt;</span> declaration is not case sensitive.</p>
                    <p>The <span className={styles.exptag}>&lt;!DOCTYPE&gt;</span> declaration for HTML5 is:</p>
                     
                     

                    <h2>HTML Headings</h2>
                    <p>HTML headings are defined with the <span className={styles.exptag}>&lt;h1&gt;</span> to <span className={styles.exptag}>&lt;h6&gt;</span> tags.</p>
                    <p><span className={styles.exptag}>&lt;h1&gt;</span> defines the most important heading. <span className={styles.exptag}>&lt;h6&gt;</span> defines the least important
                        heading:&nbsp;</p>
                    

                     

                     

                    <h2>HTML Paragraphs</h2>
                    <p>HTML paragraphs are defined with the <span className={styles.exptag}>&lt;p&gt;</span> tag:</p>
                  
                     

                    <h2>HTML Links</h2>
                    <p>HTML links are defined with the <span className={styles.exptag}>&lt;a&gt;</span> tag:</p>
                  
                    <p>The link's destination is specified in the <span className={styles.exptag}>href</span> attribute.&nbsp;</p>
                    <p>Attributes are used to provide additional information about HTML elements.</p>
                    <p>You will learn more about attributes in a later chapter.</p>
                   

                    <h2>HTML Images</h2>
                    <p>HTML images are defined with the <span className={styles.exptag}>&lt;img&gt;</span> tag.</p>
                    <p>The source file (<span className={styles.exptag}>src</span>), alternative text (<span className={styles.exptag}>alt</span>),
                        <span className={styles.exptag}>width</span>, and <span className={styles.exptag}>height</span> are provided as attributes:</p>
                     
                

                    <h2>How to View HTML Source?</h2>
                    <p>Have you ever seen a Web page and wondered &quot;Hey! How did they do that?&quot;</p>
                    <h3>View HTML Source Code:</h3>
                    <p>Right-click in an HTML page and select &quot;View Page Source&quot; (in
                        Chrome) or &quot;View Source&quot; (in Edge), or similar in other browsers. This will open a window
                        containing the HTML source code of the page.</p>
                    <h3>Inspect an HTML Element:</h3>
                    <p>Right-click on an element (or a blank area), and choose &quot;Inspect&quot; or
                        &quot;Inspect Element&quot; to see what elements are made up of (you will see both
                        the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the
                        Elements or Styles panel that opens.</p>





                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Basic;