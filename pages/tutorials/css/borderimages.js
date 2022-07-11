import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const BorderImages = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Border Images | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS  Forms</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/roundedcorners">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <h2>CSS border-image Property</h2>
                    <p>The CSS <span className={styles.exptag}>border-image</span> property allows you to specify an image to be used instead of the normal border around an element.</p>

                    <p>The property has three parts:</p>
                    <ol>
                        <li>The image to use as the border</li>
                        <li>Where to slice the image</li>
                        <li>Define whether the middle sections should be repeated or stretched</li>
                    </ol>

                    <p>The <span className={styles.exptag}>border-image</span> property takes the image and slices it into nine sections,
                        like a tic-tac-toe board. It then places the corners at the corners, and the
                        middle sections are repeated or stretched as you specify.</p>
                    <p><strong>Note:</strong> For <span className={styles.exptag}>border-image</span> to work, the element also needs the
                        <span className={styles.exptag}>border</span> property set!</p>
                    <p>Here, the middle sections of the image are repeated to create the border:</p>
                    <p id="border_image">An image as a border!</p>
                    <p>Here is the code:</p>


                    <p>Here, the middle sections of the image are stretched to create the border:</p>
                    <p id="border_image2">An image as a border!</p>
                    <p>Here is the code:</p>

                    <p><b>Tip:</b> The <span className={styles.exptag}>border-image</span> property is actually a shorthand property for the
                        <span className={styles.exptag}>border-image-source</span>, <span className={styles.exptag}>border-image-slice</span>, <span className={styles.exptag}>border-image-width</span>,
                        <span className={styles.exptag}>border-image-outset</span>
                        and <span className={styles.exptag}>border-image-repeat</span> properties.</p>




                    <h2>CSS border-image - Different Slice Values</h2>
                    <p>Different slice values completely changes the look of the border:</p>
                    <p>Example 1:</p>
                    <p id="border_image3">border-image: url(border.png) 50 round;</p>

                    <p>Example 2:</p>
                    <p id="border_image4">border-image: url(border.png) 20% round;</p>

                    <p>Example 3:</p>
                    <p id="border_image5">border-image: url(border.png) 30% round;</p>
                    <p>Here is the code:</p>




                    <h2>CSS Border Image Properties</h2>
                    <table class="ws-table-all notranslate">
                        <tr>
                            <th style={{ "width": "30%" }}>Property</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td><a href="/cssref/css3_pr_border-image.asp">border-image</a></td>
                            <td>A shorthand property for setting all the border-image-* properties</td>
                        </tr>
                        <tr>
                            <td><a href="/cssref/css3_pr_border-image-source.asp">border-image-source</a></td>
                            <td>Specifies the path to the image to be used as a border</td>
                        </tr>
                        <tr>
                            <td><a href="/cssref/css3_pr_border-image-slice.asp">border-image-slice</a></td>
                            <td>Specifies how to slice the border image</td>
                        </tr>
                        <tr>
                            <td><a href="/cssref/css3_pr_border-image-width.asp">border-image-width</a></td>
                            <td>Specifies the widths of the border image</td>
                        </tr>
                        <tr>
                            <td><a href="/cssref/css3_pr_border-image-outset.asp">border-image-outset</a></td>
                            <td>Specifies the amount by which the border image area extends beyond the border box</td>
                        </tr>
                        <tr>
                            <td><a href="/cssref/css3_pr_border-image-repeat.asp">border-image-repeat</a></td>
                            <td>Specifies whether the border image should be repeated, rounded or stretched</td>
                        </tr>
                    </table>



                    <PageContentFooter />

                </div>


            </div>



        </>
    );
}

export default BorderImages;