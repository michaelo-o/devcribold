import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports

const FormElements = () => {

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
                <title>HTML Form Elements | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML Form Elements</h1>
                    <h2>The HTML form Elements</h2>
                    <p>The HTML <span className={styles.exptag}>&lt;form&gt;</span> element can contain one or more of the following form elements:</p>

                    <ul>
                        <li><span className={styles.exptag}>&lt;input&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;label&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;select&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;textarea&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;button&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;fieldset&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;legend&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;datalist&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;output&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;option&gt;</span> </li>
                        <li><span className={styles.exptag}>&lt;optgroup&gt;</span> </li>
                    </ul>


                    <div className={styles.extraborder}>
                        <h2>The &lt;input&gt; Element</h2>
                        <p>One of the most used form element is the <span className={styles.exptag}>&lt;input&gt;</span> element. <br />

                            The <span className={styles.exptag}>&lt;input&gt;</span> element can be displayed in several ways, depending on the type attribute. <br />

                            All the different values of the type attribute are covered in the next chapter: HTML Input Types. <br /></p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="form input element" src="https://codepen.io/_michaeli/embed/RwMaxoE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/RwMaxoE"><a>
                                    form input element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <div className={styles.extraborder}>

                        <h2>The &lt;label&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;label&gt;</span> element defines a label for several form elements. <br />

                            The <span className={styles.exptag}>&lt;label&gt;</span> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element. <br />

                            The <span className={styles.exptag}>&lt;label&gt;</span> element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <span className={styles.exptag}>&lt;label&gt;</span> element, it toggles the radio button/checkbox. <br />

                            The for attribute of the <span className={styles.exptag}>&lt;label&gt;</span> tag should be equal to the id attribute of the <span className={styles.exptag}>&lt;input&gt;</span> element to bind them together. <br /></p>
                    </div>


                    <div className={styles.extraborder}>
                        <h2>The &lt;select&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;select&gt;</span> element defines a drop-down list: <br />


                            The <span className={styles.exptag}>&lt;option&gt;</span> elements defines an option that can be selected. <br />

                            By default, the first item in the drop-down list is selected. <br />

                            To define a pre-selected option, add the selected attribute to the option: <br /></p>


                        <h3>Visible Values:</h3>
                        <p>Use the size attribute to specify the number of visible values: </p>

                        <h3>Allow Multiple Selections:</h3>
                        <p>Use the multiple attribute to allow the user to select more than one value: </p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="select element" src="https://codepen.io/_michaeli/embed/ZExWvee?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/ZExWvee"><a>
                                    select element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <div className={styles.extraborder}>

                        <h2>The &lt;textarea&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;textarea&gt;</span> element defines a multi-line input field (a text area): <br />


                            The rows attribute specifies the visible number of lines in a text area. <br />

                            The cols attribute specifies the visible width of a text area. <br />


                            You can also define the size of the text area by using CSS: <br /></p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="textarea" src="https://codepen.io/_michaeli/embed/poLypPE?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/poLypPE"><a>
                                    textarea</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>The &lt;button&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;button&gt;</span> element defines a clickable button: <br />


                            Note: Always specify the type attribute for the button element. Different browsers may use different default types for the button element. <br /></p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="button" src="https://codepen.io/_michaeli/embed/jOzqYwq?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/jOzqYwq"><a>
                                    button</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>

                        <h2>The &lt;feildset&gt; and &lt;legend&gt; Elements </h2>
                        <p>The <span className={styles.exptag}>&lt;fieldset&gt;</span> element is used to group related data in a form. <br />

                            The <span className={styles.exptag}>&lt;legend&gt;</span> element defines a caption for the <span className={styles.exptag}>&lt;fieldset&gt;</span> element. <br /></p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="fieldset" src="https://codepen.io/_michaeli/embed/ExEKovo?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/ExEKovo"><a>
                                    fieldset</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <div className={styles.extraborder}>

                        <h2>The &lt;datalist&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;datalist&gt;</span> element specifies a list of pre-defined options for an <span className={styles.exptag}>&lt;input&gt;</span> element. <br />

                            Users will see a drop-down list of the pre-defined options as they input data. <br />

                            The list attribute of the <span className={styles.exptag}>&lt;input&gt;</span> element, must refer to the id attribute of the <span className={styles.exptag}>&lt;datalist&gt;</span> element. <br /></p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="datalist" src="https://codepen.io/_michaeli/embed/yLKOpzg?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/yLKOpzg"><a>
                                    datalist</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>

                        <h2>The &lt;output&gt; Element</h2>
                        <p>The <span className={styles.exptag}>&lt;output&gt;</span> element represents the result of a calculation (like one performed by a script). <br /></p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ width: 1100 }}
                                scrolling="no" title="output element" src="https://codepen.io/_michaeli/embed/PoRNEJM?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/PoRNEJM"><a>
                                    output element</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
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

export default FormElements;