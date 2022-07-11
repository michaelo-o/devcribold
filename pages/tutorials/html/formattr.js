import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import targetattr from "../../../jsons/tutorials/html/targetattr.json"

const FormAttr = () => {

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
                <title>HTML Form Attributes | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML Form Attributes</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/forms">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/formelements">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>


                    <p>The different attributes for the HTML <span className={styles.exptag}>&lt;form&gt;</span> element..</p>
                    <div className={styles.extraborder}>
                        <h2>The Action Attribute</h2>
                        <p>The <span className={styles.exptag}>action</span> attribute defines the action to be performed when the form is submitted. <br />
                            Usually, the form data is sent to a file on the server when the user clicks on the submit button. <br /> <br />
                            In the example below, the form data is sent to a file called &quot;action_page.php&quot;. This file contains a server-side script that handles the form data:</p>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="Submit Button" src="https://codepen.io/_michaeli/embed/yLKOPJr?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/yLKOPJr"><a>
                                    Submit Button</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                        <p><span className={styles.boldtext}>Tip:</span> If the <span className={styles.exptag}>action</span> attribute is omitted, the action is set to the current page.</p>
                    </div>

                    <div className={styles.extraborder}>
                        <h2>The Target Attribute</h2>
                        <p>The <span className={styles.exptag}>target</span> attribute specifies where to display the response that is received after submitting the form. <br />
                            The <span className={styles.exptag}>target</span> attribute can have one of the following values:</p>

                        <table className={styles.reftable}>
                            <tr>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                            {targetattr.map(targetattr => (
                                <tr key={targetattr.id}>
                                    <td>{targetattr['Value']}</td>
                                    <td>{targetattr['Description']}</td>
                                </tr>
                            ))}
                        </table>
                        <div className="embedDiv">
                            <iframe height="400" style={{ "width": "75%" }}
                                scrolling="no" title="The form target attribute" src="https://codepen.io/_michaeli/embed/MWVyOrW?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/MWVyOrW"><a>
                                    The form target attribute</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.extraborder}>
                        <h2>The Method, Autocomplete and Novalidate Attributes </h2>
                        <h3>Method</h3>
                        <p>The <span className={styles.exptag}>method</span> attribute specifies the HTTP method to be used when submitting the form data. <br />
                            The form-data can be sent as URL variables (with <span className={styles.exptag}>method=&quot;get&quot;</span>) or as HTTP post transaction (with <span className={styles.exptag}>method=&quot;post&quot;</span>). <br />
                            The default HTTP method when submitting form data is GET. </p>

                        <span className={styles.boldtext}>Notes on GET:</span> <br />
                        <ul>
                            <li>Appends the form data to the URL, in name/value pairs</li>
                            <li>NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)</li>
                            <li>The length of a URL is limited (2048 characters)</li>
                            <li>Useful for form submissions where a user wants to bookmark the result</li>
                            <li>GET is good for non-secure data, like query strings in Google</li>

                        </ul>

                        <span className={styles.boldtext}>Notes on POST:</span> <br />

                        <ul>
                            <li>Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL)</li>
                            <li>POST has no size limitations, and can be used to send large amounts of data.</li>
                            <li>Form submissions with POST cannot be bookmarked</li>
                        </ul>
                    </div>
                    <div className={styles.extraborder}>
                        <h3>Autocomplete</h3>
                        <p> The <span className={styles.exptag}>autocomplete</span> attribute specifies whether a form should have autocomplete on or off. <br />
                            When autocomplete is on, the browser automatically complete values based on values that the user has entered before.</p>
                    </div>
                    <div className={styles.extraborder}>
                        <h3>Novalidate</h3>
                        <p> The <span className={styles.exptag}>novalidate </span>  attribute is a boolean attribute. <br />
                            When present, it specifies that the form-data (input) should not be validated when submitted.</p>
                    </div>

                    <h3>Examples on The Method, Autocomplete and Novalidate Attributes</h3>
                    <div className="embedDiv">
                        <iframe height="700" style={{ "width": "75%" }}
                            scrolling="no" title="The Method, Autocomplete and Novalidate Attributes" src="https://codepen.io/_michaeli/embed/bGvpYxZ?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/bGvpYxZ"><a>
                                The Method, Autocomplete and Novalidate Attributes</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>





                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default FormAttr;