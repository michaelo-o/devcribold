import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import CssRefLSb from "./comps/CssRefLSb";
import RefFooter from "../RefFooter"
// default imports
import cssunitref from "../../../jsons/cssref/CssProp.json"
import { useState, useEffect } from "react";
import abslen from "../../../jsons/cssref/AbsLen.json"
import relLen from "../../../jsons/cssref/RelLen.json"
import Bsupport from "../../../jsons/cssref/BrowserSup.json"



const CssUnitRef = () => {

    // const test = style={{ width: 1300 }}
    return (
        <>

            <Head>
                <title>CSS Unit Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <CssRefLSb />

                <div className={styles.pagecontent}>
                    <h1>CSS Unit Reference</h1>
                    <h2>CSS Units.</h2>
                    <p>CSS has several different units for expressing a length. <br />
                        Many CSS properties take &quot;length&quot; values, such as <span className={styles.cssprop}>width</span>, <span className={styles.cssprop}>margin</span>, <span className={styles.cssprop}>padding</span>, <span className={styles.cssprop}>font-size</span>, etc. <br />
                        Length is a number followed by a length unit, such as <span className={styles.cssprop}>10px</span>, <span className={styles.cssprop}>2em</span>, etc.</p>
                    <div className="embedDiv">
                        <iframe height="450" style={{ width: 1100 }} scrolling="no" title="CSS Units" src="https://codepen.io/_michaeli/embed/KKodWoZ?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/KKodWoZ"><a>
                                CSS Units</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>

                    <div className={styles.extraborder}>
                        <p><span className={styles.boldtext}>Note</span>: A whitespace cannot appear between the number and the unit. However, if the value is <span className={styles.cssprop}>0</span>, the unit can be omitted. <br />
                            For some CSS properties, negative lengths are allowed. <br />
                            There are two types of length units: <span className={styles.boldtext}>absolute</span> and <span className={styles.boldtext}>relative</span></p>
                    </div>
                    <h3>Absolute Lenghts</h3>
                    <p>The absolute length units are fixed and a length expressed in any of these will appear as exactly that size. <br />
                        Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.</p>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                            {abslen.map(abslength => (
                                <tr key={abslength.id}>
                                    <td>{abslength['Unit']}</td>
                                    <td>{abslength['Description']}</td>
                                </tr>
                            ))}
                        </table>
                        <p>* Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.</p>
                    </div>
                    <h3>Relative Lengths</h3>
                    <p>Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.</p>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                            </tr>
                            {relLen.map(relLength => (
                                <tr key={relLength.id}>
                                    <td>{relLength['Unit']}</td>
                                    <td>{relLength['Description']}</td>
                                </tr>
                            ))}
                        </table>
                        <p><span className={styles.boldtext}>Tip</span>: The em and rem units are practical in creating perfectly scalable layout! <br />
                            * Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.</p>
                    </div>
                    <h3>Browser Support</h3>
                    <p>The numbers in the table specify the first browser version that fully supports the length unit.</p>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Length Unit</th>
                                <th>Google Chrome</th>
                                <th>Microsoft Edge</th>
                                <th>Mozilla Firefox</th>
                                <th>Safari</th>
                                <th>Opera Mini</th>
                            </tr>
                            {Bsupport.map(Bsup => (
                                <tr key={Bsup.id}>
                                    <td>{Bsup['Length Unit']}</td>
                                    <td>{Bsup['Google Chrome']}</td>
                                    <td>{Bsup['Microsoft Edge']}</td>
                                    <td>{Bsup['Mozilla Firefox']}</td>
                                    <td>{Bsup['Safari']}</td>
                                    <td>{Bsup['Opera Mini']}</td>
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

export default CssUnitRef;