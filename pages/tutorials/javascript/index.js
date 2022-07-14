import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../tutorialgeneral.module.css"
import StickyNav from "./comps/StickyNav";
import JsLeftSidebar from "./comps/JsLeftSidebar";
import PageContentFooter from "../../../components/PageContentFooter";


const LearnJs = () => {



    return (
        <>
            <Head>
                <title>JavaScript Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <JsLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                   
                    <h1>JavaScript Tutorial</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/javascript/intro">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                    <div className={styles.extraborder}>
                        <p className={styles.lightbackground}>
                            JavaScript is the world&apos;s most popular programming language.  <br /> <br />
                            JavaScript is the programming language of the Web. <br /> <br />
                            JavaScript is easy to learn. 
                        </p>
                    </div>
                    <h2>Easy Learning with Embedded &quot;Codepen&quot; Editor</h2>
                    <p>The Embedded Editor makes it easy for you to edit the JavaScript code and view the resuilt without having to leave the website. <br />
                        <span className={styles.boldtext}>Note</span>: Edits made in the embedded code are not permanent and would be cleared upon refreshing the page.
                    </p>
                    <div className="embedDiv">
                        <iframe height="400" style={{ "width": "75%" }}
                            scrolling="no" title="JavaScript Demo" src="https://codepen.io/_michaeli/embed/BarLQVz?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/BarLQVz"><a>
                                JavaScript Demo</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Why Study JavaScript?</h2>
                        <p>JavaScript is one of the <strong>3 languages</strong> all web developers <strong>
                            must</strong>
                            learn:</p>
                        <p>&nbsp;&nbsp; 1. <strong>HTML</strong> to define the content of web pages</p>
                        <p>&nbsp;&nbsp; 2. <strong>CSS</strong> to specify the layout of web pages</p>
                        <p>&nbsp;&nbsp; 3. <strong>JavaScript</strong> to program the behavior of web pages </p>
                    </div>
                    
                    <PageContentFooter />
                </div>



            </div>
        </>
    );
}

export default LearnJs;