import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import JsRefLSb from "./comps/JsRefLSb";
// default imports
import { useState, useEffect } from "react";
import jsclassmeth from "../../../jsons/jsref/JsClassMeth.json";
import jsclasskey from "../../../jsons/jsref/JsClassKeyw.json";
import PageContentFooter from "../../../components/PageContentFooter";


const JsClassRef = () => {


    return (
        <>

            <Head>
                <title>JavaScript Class Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <JsRefLSb />

                <div className={styles.pagecontent}>
                    <h1>JavaScript Class Reference</h1>
                    <h2>JavaScript Classes</h2>
                    <p>A <span className={styles.cssprop}>Class</span> is a type of function, but instead of using the keyword <span className={styles.cssprop}>function</span> to initiate it, we use the keyword <span className={styles.cssprop}>class</span>, and the properties are assigned inside a <span className={styles.cssprop}>constructor()</span> method:</p>
                    <div className="embedDiv">
                        <iframe height="400" style={{ width: 1100 }} scrolling="no" title="Js Classes" src="https://codepen.io/_michaeli/embed/dymYaMG?default-tab=js%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/dymYaMG"><a>
                                Js Classes</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <div className={styles.extraborder}>
                        <p>The <span className={styles.cssprop}>constructor()</span> method is a special method for creating and initializing objects created within a class. <br />
                            The <span className={styles.cssprop}>constructor()</span> method is called automatically when a class is initiated, and it has to have the exact name &quot;constructor&quot;, in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method. <br />
                            <span className={styles.boldtext}>Note</span>: A class cannot have more than one constructor() method. This will throw a <span className={styles.cssprop}>SyntaxError</span>. <br />
                            You can use the <span className={styles.cssprop}>super()</span> method to call the constructor of a parent class </p>
                    </div>

                    <h3>Class Methods</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                            {jsclassmeth.map(jsclass => (
                                <tr key={jsclass.id}>
                                    <td>{jsclass['Method']}</td>
                                    <td>{jsclass['Description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>

                    <h3>Class Keywords</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Keyword</th>
                                <th>Description</th>
                            </tr>
                            {jsclasskey.map(jsclasskey => (
                                <tr key={jsclasskey.id}>
                                    <td>{jsclasskey['Keyword']}</td>
                                    <td>{jsclasskey['Description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <PageContentFooter />
                </div>
            </div>

        </>
    );
}

export default JsClassRef;