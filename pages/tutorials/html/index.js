import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../tutorialgeneral.module.css"
import templates from "../../../jsons/template.json"
import { useState } from "react";
import LeftSidebar from "./comps/LeftSideBar";
import PageContentFooter from "../PageContentFooter";
import StickyNav from "./comps/StickyNav";


const LearnHtml = () => {



    return (
        <>
            <Head>
                <title>HTML Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <LeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <div className="fdas">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum error veritatis ea suscipit ad impedit quis amet quam necessitatibus adipisci magnam, commodi sed quibusdam saepe! Porro atque corrupti aliquid nostrum?</p>
                        <div className="dggd">
                            {templates.map(cmsl => (
                                <div key={cmsl.id}>
                                    <p>{cmsl['first_name']}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <PageContentFooter />
                </div>






































            </div>
        </>
    );
}

export default LearnHtml;