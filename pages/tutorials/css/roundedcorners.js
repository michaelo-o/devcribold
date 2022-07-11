import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";
// default imports



const CssRoundedCorners = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Rounded Corners | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Rounded Corners</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/forms">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/borderimages">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <div style={{ "borderWidth": "3px", "borderStyle": "solid", "marginTop": "20px", "fontSize": "15px", "padding": "25px", "borderRadius": "25px" }}>
                        <h2>CSS Rounded Corners</h2>
                        <p>With the CSS <span className={styles.exptag}>border-radius</span> property, you can give any element &quot;rounded corners&quot;.</p>
                    </div>


                    <h2>CSS border-radius Property</h2>
                    <p>The CSS
                        <span className={styles.exptag}>border-radius</span> property defines the radius of an
                        element's corners.</p>
                    <p><strong>Tip:</strong> This property allows you to add rounded corners to
                        elements!</p>
                    <p>Here are three examples:</p>
                     
                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "75%" }}
                                scrolling="no" title="CSS border-raduis prop1" src="https://codepen.io/_michaeli/embed/LYdZJgr?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/LYdZJgr"><a>
                                    CSS border-raduis prop1</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                        <p><b>Tip:</b> The <span className={styles.exptag}>border-radius</span> property is actually a shorthand property for the
                            <span className={styles.exptag}>border-top-left-radius</span>, <span className={styles.exptag}>border-top-right-radius</span>, <span className={styles.exptag}>border-bottom-right-radius</span>
                            and <span className={styles.exptag}>border-bottom-left-radius</span> properties.</p>


                    <h2>CSS border-radius - Specify Each Corner</h2>
                    <p>The <span className={styles.exptag}>border-radius</span> property can have from one
                        to four values. Here are the rules:</p>
                    <p><strong>Four values - border-radius: 15px 50px 30px 5px;</strong> (first
                        value applies to top-left corner, second value applies to top-right corner,
                        third value applies to bottom-right corner, and fourth value applies to
                        bottom-left corner):&nbsp;</p>

                    <p><strong>Three values - border-radius: 15px 50px 30px;</strong> (first value
                        applies to top-left corner, second value applies to top-right and bottom-left
                        corners, and third value applies to bottom-right corner):</p>

                    <p><strong>Two values - border-radius: 15px 50px;</strong> (first value applies
                        to top-left and bottom-right corners, and the second value applies to top-right
                        and bottom-left corners):</p>

                    <p><strong>One value - border-radius: 15px;</strong> (the value applies to all
                        four corners, which are rounded equally:</p>

                    <p>Here is the code:</p>
                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="450" style={{ "width": "75%" }}
                                scrolling="no" title="CSS border-raduis prop2" src="https://codepen.io/_michaeli/embed/gOeMdQJ?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/gOeMdQJ"><a>
                                    CSS border-raduis prop2</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <h2>CSS Rounded Corners Properties</h2>

                    <table className={styles.reftable}>
                        <tr>
                            <th style={{ "width": "30%" }}>Property</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>border-radius </td>
                            <td>A shorthand property for setting all the four border-*-*-radius properties</td>
                        </tr>
                        <tr>
                            <td>border-top-left-radius </td>
                            <td>Defines the shape of the border of the top-left corner</td>
                        </tr>
                        <tr>
                            <td>border-top-right-radius </td>
                            <td>Defines the shape of the border of the top-right corner</td>
                        </tr>
                        <tr>
                            <td>border-bottom-right-radius </td>
                            <td>Defines the shape of the border of the bottom-right corner</td>
                        </tr>
                        <tr>
                            <td>border-bottom-left-radius </td>
                            <td>Defines the shape of the border of the bottom-left corner</td>
                        </tr>
                    </table>



                    <PageContentFooter />

                </div>


            </div>



        </>
    );
}

export default CssRoundedCorners;