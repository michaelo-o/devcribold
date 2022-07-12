import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./infogen.module.css"
import Footer from "../../components/Footer";
import InfoGraphSideBar from "./InfoGraphSideBar";
import PageContentFooter from "../../components/PageContentFooter";

const About = () => {

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    return (
        <>
            <Head>
                <title>About DevCrib | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <InfoGraphSideBar />

                <div className={styles.pagecontent}>

                    <h1>About DevCrib</h1>

                    <h2>What is DevCrib?</h2>
                    <p>
                        We create simplified and interactive learning experiences. <br />
                        Learning web development should be easy to understand and available for everyone, everywhere! <br />
                        DevCrib is a school for front-end web developers, covering the basic aspects of front-end web development:
                    </p>
                    <div className={styles.lightbackground}>
                        <ul>
                            <li><Link href="/tutorials/html/">
                                <a> <h4>HTML Tutorial</h4></a>
                            </Link></li>
                            <li><Link href="/tutorials/css/">
                                <a> <h4>CSS Tutorial</h4></a>
                            </Link></li>
                            <li><Link href="/tutorials/javascript/">
                                <a> <h4>JavaScript Tutorial</h4></a>
                            </Link></li>
                        </ul>
                    </div>

                    <div className={styles.extraborder}>

                        <p>DevCrib was created using NextJs React Library in 2022 as a Final Year Project to be submitted to the Bells University of Technology, Ogun State, Nigeria.</p>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>You Can Help</h2>

                        <p>Many people work very hard to ensure w3schools remains useful, updated, and interesting.</p>
                        <p>If
                            you find an error, or a broken link, please tell us about
                            it.</p>
                        <p>Use the link &quot;REPORT ERROR&quot; at the bottom
                            of each page.</p>
                    </div>
                    <h2>Easy Learning on DevCrib with Embedded &quot;Codepen&quot; Editor</h2>
                    <p>The Embedded Editor makes it easy for you to edit the HTML code, CSS styles and JavaScript scripts, and also view the resuilt without having to leave the website. <br />
                        <span className={styles.boldtext}>Note</span>: Edits made in the embedded code are not permanent and would be cleared upon refreshing the page.
                    </p>
                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "85%" }}
                                scrolling="no" title="Code Sample" src="https://codepen.io/_michaeli/embed/rNdMLao?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/rNdMLao"><a>
                                    Code Sample</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <h2>Add a Link to Us</h2>
                    <p>If you want others to discover DevCrib, please add a link to us.</p>
                    <p>To add a simple text link, insert the following HTML code on your site:</p>
                    <div className={styles.snippet}>
                        <div className={styles.innersnippet}>
                            {bro}a <span className={styles.attributecolor}>href</span>=&quot;https://www.devcrib.vercel.app/&quot;{brc}<span>DevCrib</span>{bro}/a{brc}
                        </div>
                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default About;