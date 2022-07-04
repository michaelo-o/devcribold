import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import RefFooter from "../RefFooter"
import unsupportedTags from "../../../jsons/htmlref/UnsupportedTags.json"
import { useState, useEffect } from "react";


const UnsupportedHtmlTags = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState('Tag Not Found')


    useEffect(() => {
        setsearch("")
    }, [unsupportedTags])

    return (
        <>

            <Head>
                <title>Unsupported & Deprecated HTML Tags | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                <div className={styles.pagecontent}>
                    <h1>Unsupported & Deprecated HTML Tags</h1>
                    <h2>Unsupported & Deprecated HTML Tags Listed Alphabetically</h2>
                    <form className={styles.search}>
                        <input
                            type="text"
                            placeholder="Search a Tag.."
                            onChange={(event) => setsearch(event.target.value)}

                        />
                    </form>
                    <div>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                            </tr>
                            {unsupportedTags.filter((unsupportedTag) => {
                                if (search === "") {
                                    return unsupportedTag;
                                } else if (
                                    unsupportedTag?.html_tag.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return unsupportedTag;
                                } else if (
                                    unsupportedTag?.html_tag.toLowerCase().includes(search.toLowerCase())
                                ) return setnoRes('No Results')
                            }).map(unsupportedTag => (
                                <tr key={unsupportedTag.id}>
                                    <td>{unsupportedTag['html_tag']}</td>
                                    <td>{unsupportedTag['tag_description']}</td>
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

export default UnsupportedHtmlTags;