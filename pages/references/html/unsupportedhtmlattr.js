import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import UnsupportedAttr from "../../../jsons/htmlref/UnsupportedAttr.json"
import PageContentFooter from "../../../components/PageContentFooter";


const UnsupportedHtmlAttr = () => {



    return (
        <>

            <Head>
                <title>Unsupported & Deprecated HTML Attributes | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                <div className={styles.pagecontent}>
                    <h1>Unsupported & Deprecated HTML Attributes</h1>
                    <h2>Unsupported & Deprecated HTML attributes and the Elements they were used within</h2>
                    <div>
                        <table className={styles.attrtable}>
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
                        </table>
                    </div>
                    <PageContentFooter />
                </div>


            </div>
        </>
    );
}

export default UnsupportedHtmlAttr;