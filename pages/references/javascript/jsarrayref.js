import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import JsRefLSb from "./comps/JsRefLSb";
import RefFooter from "../RefFooter"
// default imports
import { useState, useEffect } from "react";
import jsarraymeth from "../../../jsons/jsref/JSArrayMethProp.json";


const JsArrayRef = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState("")


    useEffect(() => {
        setsearch("")
    }, [])


    return (
        <>

            <Head>
                <title>JavaScript Array Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <JsRefLSb />

                <div className={styles.pagecontent}>
                    <h1>JavaScript Array Reference</h1>
                    <h2>JavaScript Array Methods and Properties</h2>
                    <p>The Array object is used to store multiple values in a single variable:</p>
                    <div className="embedDiv">
                        <iframe height="300" style={{ width: 1100 }} scrolling="no" title="Js Array Ref" src="https://codepen.io/_michaeli/embed/JjLYxOY?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                            See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLYxOY"><a>
                                Js Array Ref</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                            on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                        </iframe>
                    </div>
                    <p>Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.</p>
                    <h2>JavaScript Array Methods and Properties</h2>
                    {/* Search Bar */}
                    <form className={styles.search}>
                        <input
                            type="text"
                            placeholder="Search a Property/Method.."
                            onChange={(event) => setsearch(event.target.value)}

                        />
                    </form>
                    <div>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                            {jsarraymeth.filter((jsarray) => {
                                if (search === "") {
                                    return jsarray;
                                } else if (
                                    jsarray?.Name.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return jsarray;
                                } else if (
                                    jsarray?.Name.toLowerCase().includes(search.toLowerCase())
                                ) return setnoRes("No Results")
                            }).map(jsarray => (
                                <tr key={jsarray.id}>
                                    <td>{jsarray['Name']}</td>
                                    <td>{jsarray['Description']}</td>
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

export default JsArrayRef;