import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import UnsupportedAttr from "../../../jsons/htmlref/UnsupportedAttr.json"
import PageContentFooter from "../../../components/PageContentFooter";

import { useAuthContext } from "../../../hooks/useAuthContext"


const UnsupportedHtmlAttr = () => {


        const { user } = useAuthContext()


    return (
        <>

            <Head>
                <title>Unsupported & Deprecated HTML Attributes | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                {user ? (

                <div className={styles.pagecontent}>
                    <h1>Unsupported & Deprecated HTML Attributes</h1>
                    <h2>Unsupported & Deprecated HTML attributes and the Elements they were used within</h2>
                    <div>
                        <table className={styles.attrtable}>
                            <tbody>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Belongs To</th>
                                    <th>Description</th>
                                </tr>
                                {UnsupportedAttr.map(unsupportedAttr => (
                                    <tr key={unsupportedAttr.id}>
                                        <td>{unsupportedAttr['Attribute']}</td>
                                        <td>{unsupportedAttr['Belongs to']}</td>
                                        <td>{unsupportedAttr['Description']}</td>
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

export default UnsupportedHtmlAttr;