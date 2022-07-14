import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import JsRefLSb from "./comps/JsRefLSb";
// default imports
import { useState, useEffect } from "react";
import jsglobalmeth from "../../../jsons/jsref/JsGlobalMeth.json";
import jssglobalprop from "../../../jsons/jsref/JsGlobalProp.json";
import PageContentFooter from "../../../components/PageContentFooter";


const JsStringRef = () => {


    return (
        <>

            <Head>
                <title>JavaScript Global Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <JsRefLSb />

                <div className={styles.pagecontent}>
                    <h1>JavaScript Global Reference</h1>
                    <h2>JavaScript Global Methods and Properties</h2>
                    <p>The JavaScript global properties and methods can be used with all JavaScript objects.</p>

                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Function</th>
                                    <th>Description</th>
                                </tr>
                                {jsglobalmeth.map(jsglobalmeth => (
                                    <tr key={jsglobalmeth.id}>
                                        <td>{jsglobalmeth['Function']}</td>
                                        <td>{jsglobalmeth['Description']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>JavaScript Global Properties</h3>
                    <div className={styles.extraborder}>
                        <table className={styles.reftable}>
                            <tbody>
                                <tr>
                                    <th>Property</th>
                                    <th>Description</th>
                                </tr>
                                {jssglobalprop.map(jssglobalprop => (
                                    <tr key={jssglobalprop.id}>
                                        <td>{jssglobalprop['Property']}</td>
                                        <td>{jssglobalprop['Description']}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <PageContentFooter />
                </div>
            </div>

        </>
    );
}

export default JsStringRef;