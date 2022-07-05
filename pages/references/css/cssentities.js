import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import CssRefLSb from "./comps/CssRefLSb";
import RefFooter from "../RefFooter"
import EntTable from "./comps/enttable";
// default imports

const CssEntities = () => {
    return (
        <>
            <Head>
                <title>CSS Entities | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <CssRefLSb />

                <div className={styles.pagecontent}>
                    <h1>CSS Entities</h1>
                    <h2>Complete CSS Entity Reference</h2>
                    <p>If you use CSS to display any of these characters in HTML, you can use the CSS entity found in the table below.</p>
                    <div className="embedDiv">
                        <iframe height="450" style={{ width: 1100 }} scrolling="no" title="CSS Entities" src="https://codepen.io/_michaeli/embed/wvmKQgZ?default-tab=html%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/wvmKQgZ"><a>
                                CSS Entities</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <table className={styles.entTable}>
                        <tbody>
                            <EntTable />
                        </tbody>
                    </table>

                    <RefFooter />
                </div>

            </div>

        </>
    );
}

export default CssEntities;