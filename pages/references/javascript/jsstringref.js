import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import JsRefLSb from "./comps/JsRefLSb";
import RefFooter from "../RefFooter"
// default imports
import { useState, useEffect } from "react";
import jsstringmeth from "../../../jsons/jsref/JsStringMeth.json";
import jsstringprop from "../../../jsons/jsref/JsString Props.json";


const JsStringRef = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState("")


    useEffect(() => {
        setsearch("")
    }, [])


    return (
        <>

            <Head>
                <title>JavaScript String Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <JsRefLSb />

                <div className={styles.pagecontent}>
                    <h1>JavaScript String Reference</h1>
                    <h2>JavaScript Strings</h2>
                    <p>A JavaScript string stores a series of characters like "John Doe". <br />
                        A string can be any text inside double or single quotes:</p>
                    <div className="embedDiv">
                        <iframe height="300" style={{ width: 1100 }} scrolling="no" title="Js Array Ref" src="https://codepen.io/_michaeli/embed/dymYaeN?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLYxOY"><a>
                                Js String Ref</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <div className={styles.extraborder}>
                        <p>String indexes are zero-based: <br />
                            The first character is in position 0, the second in 1, and so on.</p>
                    </div>
                    <h3>String Properties and Methods</h3>
                    <p>Normally, strings like &quot;John Doe&quot;, cannot have methods or properties because they are not objects. <br />
                        But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.</p>
                        <p><span className={styles.boldtext}> <br />
                            Note;</span>
                            <br /> All string methods return a new value. <br />
                            They do not change the original variable.</p>
                    {/* Search Bar */}
                    <form className={styles.search}>
                        <input
                            type="text"
                            placeholder="Search a String Property/Method.."
                            onChange={(event) => setsearch(event.target.value)}
                        />
                    </form>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                            {jsstringmeth.filter((jsstring) => {
                                if (search === "") {
                                    return jsstring;
                                } else if (
                                    jsstring?.Method.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return jsstring;
                                } else if (
                                    jsstring?.Method.toLowerCase().includes(search.toLowerCase())
                                ) return setnoRes("No Results")
                            }).map(jsstring => (
                                <tr key={jsstring.id}>
                                    <td>{jsstring['Method']}</td>
                                    <td>{jsstring['Description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <h3>JavaScript String Properties</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Property</th>
                                <th>Description</th>
                            </tr>
                            {jsstringprop.map(jsstring => (
                                <tr key={jsstring.id}>
                                    <td>{jsstring['Property']}</td>
                                    <td>{jsstring['Description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>


                    <RefFooter />
                </div>
            </div>

        </>
    );
}

export default JsStringRef;