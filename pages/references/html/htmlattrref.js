import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import htmlattrref from "../../../jsons/htmlref/htmlattrref.json"
import { useState, useEffect } from "react";
import PageContentFooter from "../../../components/PageContentFooter";
import { useAuthContext } from "../../../hooks/useAuthContext"




const HtmlAttrRef = () => {

    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState('Tag Not Found')


    useEffect(() => {
        setsearch("")
    }, [])

    const { user } = useAuthContext()

    return (
        <>

            <Head>
                <title>HTML Attribute Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                {user ? (

                    <div className={styles.pagecontent}>
                        <h1>HTML Attribute Reference</h1>
                        <h2>HTML attributes and Elements they can be used within</h2>

                        <form className={styles.attrsearch}>
                            <input
                                type="text"
                                placeholder="Search an Attribute.."
                                onChange={(event) => setsearch(event.target.value)}

                            />
                        </form>
                        <div>
                            <table className={styles.attrtable}>
                                <tbody>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>Belongs To</th>
                                        <th>Description</th>
                                    </tr>
                                    {htmlattrref.filter((htmlattr) => {
                                        if (search === "") {
                                            return htmlattr;
                                        } else if (
                                            htmlattr?.Attribute.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return htmlattr;
                                        } else if (
                                            htmlattr?.Attribute.toLowerCase().includes(search.toLowerCase())
                                        ) return setnoRes('No Results')
                                    }).map(htmlattr => (
                                        <tr key={htmlattr.id}>
                                            <td>{htmlattr['Attribute']}</td>
                                            <td>{htmlattr['Belongs to']}</td>
                                            <td>{htmlattr['Description']}</td>
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

export default HtmlAttrRef;