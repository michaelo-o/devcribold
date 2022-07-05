import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import CssRefLSb from "./comps/CssRefLSb";
import RefFooter from "../RefFooter"
// default imports
import cssSelref from "../../../jsons/cssref/CssSelector.json"


const CssSelRef = () => {


    return (
        <>

            <Head>
                <title>CSS Selector Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <CssRefLSb />

                <div className={styles.pagecontent}>
                    <h1>CSS Selector Reference</h1>
                    <h2>CSS Selectors</h2>
                    <p>In CSS, selectors are patterns used to select the element(s) you want to style.</p>

                    <div>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Selector</th>
                                <th>Example</th>
                                <th>Example description</th>
                            </tr>
                            {cssSelref.map(cssSel => (
                                <tr key={cssSel.id}>
                                    <td>{cssSel['Selector']}</td>
                                    <td>{cssSel['Example']}</td>
                                    <td>{cssSel['Example Description']}</td>
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

export default CssSelRef;