import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
// default imports
import htmltagref from "../../../jsons/htmlref/htmltagref.json"
import { useState, useEffect } from "react";
import PageContentFooter from "../../../components/PageContentFooter";
import { useAuthContext } from "../../../hooks/useAuthContext"


const HtmlTagRef = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState('Tag Not Found')


    useEffect(() => {
        setsearch("")
    }, [])
    const { user } = useAuthContext()


    return (
        <>

            <Head>
                <title>HTML Tag Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />
                {user ? (

                    <div className={styles.pagecontent}>
                        <h1>HTML Tag Reference</h1>
                        <h2>HTML Tags Listed Alphabetically</h2>
                        {/* Search Bar */}
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
                                    {htmltagref.filter((htmltag) => {
                                        if (search === "") {
                                            return htmltag;
                                        } else if (
                                            htmltag?.html_tag.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return htmltag;
                                        } else if (
                                            htmltag?.html_tag.toLowerCase().includes(search.toLowerCase())
                                        ) return setnoRes('No Results')
                                    }).map(htmltag => (
                                        <tr key={htmltag.id}>
                                            <td>{htmltag['html_tag']}</td>
                                            <td>{htmltag['tag_description']}</td>
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

export default HtmlTagRef;