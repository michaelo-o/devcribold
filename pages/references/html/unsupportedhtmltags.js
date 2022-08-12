import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import unsupportedTags from "../../../jsons/htmlref/UnsupportedTags.json"
import { useState, useEffect } from "react";
import PageContentFooter from "../../../components/PageContentFooter";

import { useAuthContext } from "../../../hooks/useAuthContext"


const UnsupportedHtmlTags = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState('Tag Not Found')


    useEffect(() => {
        setsearch("")
    }, [])

        const { user } = useAuthContext()

    return (
        <>

            <Head>
                <title>Unsupported & Deprecated HTML Tags | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                {user ? (

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
                            <tbody>
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
                            </tbody>
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

export default UnsupportedHtmlTags;