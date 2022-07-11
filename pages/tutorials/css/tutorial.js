import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const RWD = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Tutorial</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="700" style={{ "width": "80%" }}
                                scrolling="no" title="CSS RWD" src="https://codepen.io/_michaeli/embed/JjLKmoB?default-tab=css&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLKmoB"><a>
                                    CSS RWD</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <h2>CSS Tutorial</h2>
                    <p>Responsive web design makes your web page look good on all devices.</p>
                    <p>Responsive web design uses only HTML and CSS.</p>
                    <p>Responsive web design is not a program or a JavaScript.</p>

                    <h2>Designing For The Best Experience For All Users</h2>
                    <p>Web pages can be viewed using many different devices: desktops, tablets, and phones.
                        Your web page should look good, and be easy to use, regardless of the device.
                    </p>

                    <p>Web pages should not leave out information to fit smaller devices, but rather adapt its content to fit any device:</p>

                    <p>It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.</p>


                    <PageContentFooter />

                </div>


            </div>



        </>
    );
}

export default RWD;