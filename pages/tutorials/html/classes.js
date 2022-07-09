import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports


const Classes = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;

    return (
        <>
            <Head>
                <title>HTML Classes | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
  <h1>HTML class Attribute</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/blockinline">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/id">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                  
                    <p>The HTML <span className={styles.exptag}>class</span> attribute is used to specify a class for an HTML element. <br />
                        Multiple HTML elements can share the same class.</p>
                    <div className={styles.extraborder}>
                        <h2>Using the Class Attribute</h2>
                        <p>The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name. <br /> <br />
                            In the following example we have three <span className={styles.exptag}>&lt;div&gt;</span> elements with a class attribute with the value of &quot;city&quot;. All of the three <span className={styles.exptag}>&lt;div&gt;</span> elements will be styled equally according to the .city style definition in the head section:</p>
                        <div className="embedDiv">
                            <iframe height="550" style={{ "width": "75%" }}
                                scrolling="no" title="HTML Classes" src="https://codepen.io/_michaeli/embed/zYWqENy?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/zYWqENy"><a>
                                    Html CLasses</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>The Syntax For Class</h2>
                        <p>To create a class; write a period (.) character, followed by a class name. Then, define the CSS properties within curly braces {cbro} {cbrc}:</p>
                        <h3>Below is an example to create a class named &quot;city&quot;;</h3>
                        <div className="embedDiv">
                            <iframe height="550" style={{ "width": "75%" }}
                                scrolling="no" title="Class Example" src="https://codepen.io/_michaeli/embed/MWVyEoX?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/MWVyEoX"><a>
                                    Class Example</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Multiple Classes</h2>
                        <p>HTML elements can belong to more than one class. <br />
                            To define multiple classes, separate the class names with a space, e.g.&lt; div class =&quot; city main&quot;&gt;. The element will be styled according to all the classes specified. <br /> <br />
                            In the following example, the first <span className={styles.exptag}>&lt;h2&gt;</span> element belongs to both the city class and also to the main class, and will get the CSS styles from both of the classes: </p>
                        <div className="embedDiv">
                            <iframe height="550" style={{ "width": "75%" }}
                                scrolling="no" title="Multiple classes" src="https://codepen.io/_michaeli/embed/KKozXQR?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/KKozXQR"><a>
                                    Multiple classes</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Different Elements Can Share Same Class</h2>
                        <p>Different HTML elements can point to the same class name. <br /> <br />
                            In the following example, both <span className={styles.exptag}>&lt;h2&gt;</span> and <span className={styles.exptag}>&lt;p&gt;</span> points to the &quot;city&quot; class and will share the same style:</p>
                        <div className="embedDiv">
                            <iframe height="550" style={{ "width": "75%" }}
                                scrolling="no" title="Different Elements Can Share Same Class" src="https://codepen.io/_michaeli/embed/oNqxGqg?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/oNqxGqg"><a>
                                    Different Elements Can Share Same Class</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
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

export default Classes;