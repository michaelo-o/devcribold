import styles from "../excercisesgen.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageContentFooter from "../../../components/PageContentFooter";
import HtmlExLSb from "./comps/HtmlExLSb";
import { useState } from "react";


const AttributesEx = () => {

    const [showSideBar, setshowSideBar] = useState(false)
    const sidebarToggle = () => {
        setshowSideBar(!showSideBar)
    }



    return (
        <>
            <Head>
                <title>HTML Excercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.genexcbackground}>

                <HtmlExLSb />
                {/* {showSideBar ? (
                    <HtmlExLSb sidebarToggle={sidebarToggle} />
                ) : 
                <span className={styles.sTgle}>
                    <Image src="/menu (1).svg" onClick={sidebarToggle}  width={35} height={35} alt="Toggle SideBar" />
                 </span> 
                } */}



                <div className={styles.pagecontent}>
                    <h2>HTML Attributes Excercise</h2>





                    <PageContentFooter />
                </div>
            </div>

        </>
    );
}

export default AttributesEx;