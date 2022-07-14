import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import CssLeftSidebar from "./comps/CssLeftSidebar";
import cssSelectors from "../../../jsons/tutorials/css/cssSelectors.json"

// default imports



const CssSelectors = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;



    return (
        <>
            <Head>
                <title>CSS Selectors | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <CssLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>CSS Selectors</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/css/syntax">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/css/tutorial">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>



                    <p>A CSS selector selects the HTML element(s) you
                        want to style.</p>


                    <h2>CSS Selectors</h2>
                    <p>CSS selectors are used to &quot;find&quot; (or select) the HTML elements you
                        want to style.</p>
                    <p>We can divide CSS selectors into five categories:</p>
                    <ul>
                        <li>Simple selectors (select elements based on name, id, class)</li>
                        <li><a>Combinator selectors</a> (select
                            elements based on a specific relationship between them)</li>
                        <li><a>Pseudo-class selectors</a> (select elements based on a certain state)</li>
                        <li><a>Pseudo-elements selectors</a> (select
                            and style a part of an element)</li>
                        <li><a>Attribute selectors</a> (select elements based on
                            an attribute or attribute value)</li>
                    </ul>
                    <p>This page will explain the most basic CSS selectors.</p>


                    <h2>The CSS element Selector</h2>
                    <p>The element selector selects HTML elements based on the element name.</p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Element Selector" src="https://codepen.io/_michaeli/embed/NWYrLxm?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/NWYrLxm"><a>
                                    CSS Element Selector</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <h2>The CSS id Selector</h2>
                    <p>The id selector uses the id attribute of an HTML element to select a specific element.</p>
                    <p>The id of an element is unique within a page, so the id selector is
                        used to
                        select one unique element!</p>
                    <p>To select an element with a specific id, write a hash (#) character, followed by
                        the id of the element.</p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Id Selector" src="https://codepen.io/_michaeli/embed/abYZamJ?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/abYZamJ"><a>
                                    CSS Id Selector</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>



                    <h2>The CSS class Selector</h2>
                    <p>The class selector selects HTML elements with a specific class attribute.</p>
                    <p>To select elements with a specific class, write a period (.) character, followed by the
                        class name.</p>

                    <p>You can also specify that only specific HTML elements should be affected by a class.</p>


                    <p>HTML elements can also refer to more than one class.</p>

                    <p><strong>Note:</strong> A class name cannot start with a number!</p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Class Selector" src="https://codepen.io/_michaeli/embed/MWVeqJK?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/MWVeqJK"><a>
                                    CSS Class Selector</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <h2>The CSS Universal Selector</h2>
                    <p>The universal selector (*) selects all HTML
                        elements on the page.</p>

                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Universal Selector" src="https://codepen.io/_michaeli/embed/OJvXopd?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/OJvXopd"><a>
                                    CSS Universal Selector</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <h2>The CSS Grouping Selector</h2>
                    <p>The grouping selector selects all the HTML elements with the same style
                        definitions.</p>
                    <p>Look at the following CSS code (the h1, h2, and p elements have the same
                        style definitions):</p>


                    <p>It will be better to group the selectors, to minimize the code.</p>
                    <p>To group selectors, separate each selector with a comma.</p>


                    <div className={styles.extraborder}>
                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="CSS Grouping Selector" src="https://codepen.io/_michaeli/embed/RwMRYgY?default-tab=css%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/RwMRYgY"><a>
                                    CSS Grouping Selector</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <h2>All CSS Simple Selectors</h2>

                    <table className={styles.reftable}>
                        <tr>
                            <th>Selector</th>
                            <th>Example</th>
                            <th>Example description</th>
                        </tr>
                        {cssSelectors.map(cssSelectors => (
                            <tr key={cssSelectors.id}>
                                <td>{cssSelectors['Selector']}</td>
                                <td>{cssSelectors['Example']}</td>
                                <td>{cssSelectors['Example description']}</td>
                            </tr>
                        ))}
                    </table>



                    <PageContentFooter />

                </div>


            </div>



        </>
    );
}

export default CssSelectors;