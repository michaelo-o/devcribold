import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
// default imports
import WinEventAttr from "../../../jsons/htmlref/WindowEventAttr.json"
import FormEvent from "../../../jsons/htmlref/FormEventAttr.json"
import KeybEvent from "../../../jsons/htmlref/KeyBEventAttr.json"
import MouseEvent from "../../../jsons/htmlref/MouseEventAttr.json"
import DragEvent from "../../../jsons/htmlref/DragEventAttr.json"
import ClipEvent from "../../../jsons/htmlref/ClipboardEventAttr.json"
import MediaEvent from "../../../jsons/htmlref/MediaEventAttr.json"
import PageContentFooter from "../../../components/PageContentFooter";

import { useAuthContext } from "../../../hooks/useAuthContext"




const HtmlEventrzef = () => {

    // HTML ANGLE BRACKET
    const BracketOpen = '<';
    const BracketClose = '>';

        const { user } = useAuthContext()

    return (
        <>
            <Head>
                <title>HTML Event Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                {user ? (

                <div className={styles.pagecontent}>
                    <h1>HTML Event Reference</h1>
                    <h2>Global Event Attributes.</h2>
                    <div className={styles.extraborder}>
                        <p>HTML has the ability to let events trigger actions in a browser, like starting a JavaScript when a user clicks on an element.<br />
                            Below are the global event attributes that can be added to HTML elements to define event actions.</p>
                    </div>
                    <h3>Window Event Attributes</h3>
                    <p>Events triggered for the window object (applies to the &#10216;body&#10217; tag):</p>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {WinEventAttr.map(WinEventAtt => (
                                    <tr key={WinEventAtt.id}>
                                        <td>{WinEventAtt['Attribute']}</td>
                                        <td>{WinEventAtt['Value']}</td>
                                        <td>{WinEventAtt['Description']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>Form Events</h3>
                    <p>Events triggered by actions inside a HTML form (applies to almost all HTML elements, but is most used in form elements):</p>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {FormEvent.map(FormE => (
                                    <tr key={FormE.id}>
                                        <td>{FormE['Attribute']}</td>
                                        <td>{FormE['Value']}</td>
                                        <td>{FormE['Description']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>Keyboard Events</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {KeybEvent.map(Keyb => (
                                    <tr key={Keyb.id}>
                                        <td>{Keyb['Attribute']}</td>
                                        <td>{Keyb['Value']}</td>
                                        <td>{Keyb['Description']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>Mouse Events</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {MouseEvent.map(MouseE => (
                                    <tr key={MouseE.id}>
                                        <td>{MouseE['Attribute']}</td>
                                        <td>{MouseE['Value']}</td>
                                        <td>{MouseE['Description']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>Drag Events</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {DragEvent.map(DragE => (
                                    <tr key={DragE.id}>
                                        <td>{DragE['Attribute']}</td>
                                        <td>{DragE['Value']}</td>
                                        <td>{DragE['Description']}</td>
                                    </tr>
                                ))}</tbody>
                        </table>
                    </div>
                    <h3>Clipboard Events</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {ClipEvent.map(ClipE => (
                                    <tr key={ClipE.id}>
                                        <td>{ClipE['Attribute']}</td>
                                        <td>{ClipE['Value']}</td>
                                        <td>{ClipE['Description']}</td>
                                    </tr>
                                ))}</tbody>
                        </table>
                    </div>    &#10216;body&#10217;
                    <h3>Media Events</h3>
                    <p>Events triggered by medias like videos, images and audio (applies to all HTML elements, but is most common in media elements, like &#10216;audio&#10217;, &#10216;embed&#10217;, &#10216;img&#10217;, &#10216;object&#10217;, and &#10216;video&#10217;).</p>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                    <th>Description</th>
                                </tr>
                                {MediaEvent.map(MediaE => (
                                    <tr key={MediaE.id}>
                                        <td>{MediaE['Attribute']}</td>
                                        <td>{MediaE['Value']}</td>
                                        <td>{MediaE['Description']}</td>
                                    </tr>
                                ))}</tbody>
                        </table>
                    </div>


                    <PageContentFooter />
                    </div>) : <div className="loginmessage">
                    <h2>
                        <Link href="/login/"><a>Log In</a></Link>
                        to See References</h2 >
                </div>
                }
            </div>


        </>
    );
}

export default HtmlEventrzef;