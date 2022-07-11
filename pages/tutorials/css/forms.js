import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";

// default imports



const CssForms = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Forms | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Forms</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/roundedcorners">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <p>The look of an HTML form can be greatly improved with CSS:</p>





                    <h2>Styling Input Fields</h2>
                    <p>Use the <span className={styles.exptag}>width</span> property to determine the width of the input field:</p>




                    <p>The example above applies to all &lt;input&gt; elements. If you only want to
                        style a specific input type, you can use attribute selectors:</p>
                    <ul>
                        <li><span className={styles.exptag}>input[type=text]</span> - will only select text fields</li>
                        <li><span className={styles.exptag}>input[type=password]</span> - will only select password fields</li>
                        <li><span className={styles.exptag}>input[type=number]</span> - will only select number fields</li>
                        <li>etc..</li>
                    </ul>


                    <h2>Padded Inputs</h2>
                    <p>Use the <span className={styles.exptag}>padding</span> property to add space inside the text field.</p>
                    <p><strong>Tip:</strong> When you have many inputs after each other, you might
                        also want to add some <span className={styles.exptag}>margin</span>, to add more space
                        outside of them:</p>

                    <p>Note that we have set the <span className={styles.exptag}>box-sizing</span> property to
                        <span className={styles.exptag}>border-box</span>. This makes sure that the padding and eventually borders are included in the
                        total width and height of the elements.  <br />Read more about the <span className={styles.exptag}>box-sizing</span> property in our <a href="css3_box-sizing.asp">CSS Box Sizing</a> chapter.</p>



                    <h2>Bordered Inputs</h2>
                    <p>Use the <span className={styles.exptag}>border</span> property to change the border size and color, and
                        use the <span className={styles.exptag}>border-radius</span> property to add rounded corners:</p>




                    <p>If you only want a bottom border, use the <span className={styles.exptag}>border-bottom</span> property:</p>




                    <h2>Colored Inputs</h2>
                    <p>Use the <span className={styles.exptag}>background-color</span> property to add a background color to the input, and
                        the <span className={styles.exptag}>color</span> property to change the text color:</p>





                    <h2>Focused Inputs</h2>
                    <p>By default, some browsers will add a blue outline around the input when it gets
                        focus (clicked on). You can remove this behavior by adding <span className={styles.exptag}>outline: none;</span> to the input.</p>
                    <p>Use the <span className={styles.exptag}>:focus</span> selector to do something with the input field when it gets focus:</p>





                    <h2>Input with icon/image</h2>
                    <p>If you want an icon inside the input, use the <span className={styles.exptag}>background-image</span> property and
                        position it with the <span className={styles.exptag}>background-position</span> property. Also notice that we
                        add a
                        large left padding to reserve the space of the icon:</p>



                    <h2>Animated Search Input</h2>
                    <p>In this example we use the CSS <span className={styles.exptag}>transition</span> property to animate
                        the width of the search input when it gets focus. You will learn more about the <span className={styles.exptag}>
                            transition</span> property later, in our <a href="css3_transitions.asp">CSS Transitions</a> chapter.</p>





                    <h2>Styling Textareas</h2>
                    <p><strong>Tip:</strong> Use the <span className={styles.exptag}>resize</span> property to prevent textareas from being resized (disable the "grabber" in the bottom right corner):</p>





                    <h2>Styling Select Menus</h2>
                    <form className="test">
                        <select id="country" name="country" style={{ "backgroundColor": "#f1f1f1", "border": "none" }}>
                            <option value="usa">Australia</option>
                            <option value="usa">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                    </form>



                    <h2>Styling Input Buttons</h2>





                    <h2>Responsive Form</h2>
                    <p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>
                    <div className="w3-note w3-panel">
                        <p><strong>Advanced:</strong> The following example use <a href="css3_mediaqueries.asp">media queries</a> to create a responsive form. You will learn more about this in a later chapter.</p>
                    </div>





                    <PageContentFooter />

                </div>


            </div>



        </>
    );
}

export default CssForms;