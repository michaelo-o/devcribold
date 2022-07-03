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


const LearnCSS = () => {



    return (
        <>
            <Head>
                <title>CSS Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <LeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <div className="fdas">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum error veritatis ea suscipit ad impedit quis amet quam necessitatibus adipisci magnam, commodi sed quibusdam saepe! Porro atque corrupti aliquid nostrum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero delectus saepe fugit molestias iste amet ad consequuntur voluptatum facere, odio recusandae tempora similique! Officia facilis, libero harum omnis sit accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit corrupti incidunt ducimus eveniet ratione odio eaque ad perspiciatis repellat asperiores nam, aut quia ex a tempore qui? Quibusdam, debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sapiente possimus amet odit recusandae tempora voluptate temporibus iure error, natus obcaecati. Mollitia dolor quas saepe modi rem nam laudantium dicta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga dignissimos, quos corporis facere magni aliquam aspernatur hic! Ipsam nihil neque dolor fugit illum est reprehenderit architecto corrupti, totam nam!
                        </p>
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

export default LearnCSS;