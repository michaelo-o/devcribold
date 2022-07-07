import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import JsRefLSb from "./comps/JsRefLSb";
// default imports
import { useState, useEffect } from "react";
import jsmethref from "../../../jsons/jsref/JsPropMethRef.json";
import PageContentFooter from "../../../components/PageContentFooter";


const JsMethRef = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState("")


    useEffect(() => {
        setsearch("")
    }, [])


    return (
        <>

            <Head>
                <title>JavaScript Method Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <JsRefLSb />

                <div className={styles.pagecontent}>
                    <h1>JavaScript Method Reference</h1>
                    <h2>JavaScript Properties/Methods Listed Alphabetically</h2>
                    {/* Search Bar */}
                    <form className={styles.mrefsearch}>
                        <input
                            type="text"
                            placeholder="Search a Property/Method.."
                            onChange={(event) => setsearch(event.target.value)}

                        />
                    </form>
                    <div>
                        <table className={styles.jsmethtable}>
                            <tr>
                                <th>Property/Method</th>
                                <th>Description</th>
                                <th>Belongs To</th>
                            </tr>
                            {jsmethref.filter((jsmeth) => {
                                if (search === "") {
                                    return jsmeth;
                                } else if (
                                    jsmeth?.Property/Method.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return jsmeth;
                                } else if (
                                    jsmeth?.Property/Method.toLowerCase().includes(search.toLowerCase())
                                ) return setnoRes("No Results")
                            }).map(jsmeth => (
                                <tr key={jsmeth.id}>
                                    <td>{jsmeth['Property/Method']}</td>
                                    <td>{jsmeth['Description']}</td>
                                    <td>{jsmeth['Belongs To']}</td>
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

export default JsMethRef;