import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import CssRefLSb from "./comps/CssRefLSb";
import EntTable from "./comps/enttable";
import PageContentFooter from "../../../components/PageContentFooter";
// default imports

import { useAuthContext } from "../../../hooks/useAuthContext"

const CssEntities = () => {
        const { user } = useAuthContext()

    return (
        <>
            <Head>
                <title>CSS Entities | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <CssRefLSb />

                {user ? (

                <div className={styles.pagecontent}>
                    <h1>CSS Entities</h1>
                    <h2>Complete CSS Entity Reference</h2>
                    <p>If you use CSS to display any of these characters in HTML, you can use the CSS entity found in the table below.</p>
                    <div className="embedDiv">
                        <iframe height="450" style={{ width: 1100 }} scrolling="no" title="CSS Entities" src="https://codepen.io/_michaeli/embed/wvmKQgZ?default-tab=html%2Cresult&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
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

                    <PageContentFooter />
                    </div>) : <div className="loginmessage">
                    <h2>
                        <Link href="/login/"><a>Log In</a></Link>
                        to See References</h2 >
                </div>}

            </div>

        </>
    );
}

export default CssEntities;