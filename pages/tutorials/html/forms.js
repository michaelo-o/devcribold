import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import forminputs from "../../../jsons/tutorials/html/form inputs.json"

const Forms = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;

    return (
        <>
            <Head>
                <title>HTML Forms | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML Forms</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/htmlxhtml">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/formattr">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                    <p>An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
                    <div className={styles.extraborder}>
                        <h2>The &lt;form&gt; Element</h2>
                        <p>The HTML <span className={styles.exptag}>&lt;form&gt;</span> element is used to create an HTML form for user input:</p>
                        <h3 className="inlinehtml">
                            {bro}form{brc}
                            <br />
                            <span> .
                                <br />
                                form elements
                                <br />
                                .</span>
                            <br />
                            {bro}/form{brc}
                        </h3> <br />
                        <p>The <span className={styles.exptag}>&lt;form&gt;</span> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.</p>

                        <h2> The &lt;input&gt; Element</h2>
                        <p>The HTML <span className={styles.exptag}>&lt;input&gt;</span> element is the most used form element. <br />
                            An <span className={styles.exptag}>&lt;input&gt;</span> element can be displayed in many ways, depending on the type attribute. <br />
                            Here are some examples:</p>

                        <table className={styles.reftable}>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            {forminputs.map(forminputs => (
                                <tr key={forminputs.id}>
                                    <td>{forminputs['Type']}</td>
                                    <td>{forminputs['Description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Text Feilds</h2>
                        <p>The <span className={styles.exptag}>&lt;input type=&quot;text&quot;&gt;</span> defines a single-line input field for text input.</p>

                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="Text input fields" src="https://codepen.io/_michaeli/embed/JjLXrQd?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLXrQd"><a>
                                    Text input fields</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>

                        <h2>The &lt;label&gt; Element</h2>
                        <p> Notice the use of the <span className={styles.exptag}>&lt;label&gt;</span> element in the example above. <br />

                            The <span className={styles.exptag}>&lt;label&gt;</span> tag defines a label for many form elements. <br />

                            The <span className={styles.exptag}>&lt;label&gt;</span> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element. <br />

                            The <span className={styles.exptag}>&lt;label&gt;</span> element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <span className={styles.exptag}>&lt;label&gt;</span> element, it toggles the radio button/checkbox. <br />

                            The <span className={styles.exptag}>for</span> attribute of the <span className={styles.exptag}>&lt;label&gt;</span> tag should be equal to the <span className={styles.exptag}>id</span> attribute of the <span className={styles.exptag}>&lt;input&gt;</span> element to bind them together.</p>

                    </div>
                    <div className={styles.extraborder}>
                        <h2>Radio Buttons </h2>
                        <p>The <span className={styles.exptag}>&lt;input type=&quot;radio&quot;&gt;</span> defines a radio button. <br />
                            Radio buttons let a user select ONE of a limited number of choices.</p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Radio Buttons" src="https://codepen.io/_michaeli/embed/JjLXOoG?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLXOoG"><a>
                                    Radio Buttons</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>Checkboxes </h2>
                        <p>The <span className={styles.exptag}>&lt; input type =&quot;checkbox&quot;&gt;</span> defines a checkbox. <br />
                            Checkboxes let a user select ZERO or MORE options of a limited number of choices.</p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Checkboxes" src="https://codepen.io/_michaeli/embed/GRxZOpM?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/GRxZOpM"><a>
                                    Checkboxes</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>The Submit Button </h2>
                        <p>The <span className={styles.exptag}>&lt;input type=&quot;submit&quot;&gt;</span> defines a button for submitting the form data to a form-handler. <br />
                            The form-handler is typically a file on the server with a script for processing input data. <br />
                            The form-handler is specified in the form&apos;s <span className={styles.exptag}>action</span> attribute. </p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Submit Button" src="https://codepen.io/_michaeli/embed/yLKOPJr?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/yLKOPJr"><a>
                                    Submit Button</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>
                        <h2>The name Attribute for &lt;input&gt; </h2>
                        <p>Notice that each input field must have a <span className={styles.exptag}>name</span> attribute to be submitted. <br />

                            If the <span className={styles.exptag}>name</span> attribute is omitted, the value of the input field will not be sent at all. </p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="The name Attribute" src="https://codepen.io/_michaeli/embed/wvmGPzx?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/wvmGPzx"><a>
                                    The name Attribute</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
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

export default Forms;