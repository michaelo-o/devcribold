import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../../../styles/htmlhome.module.css"
import templates from "../../../jsons/template.json"


const LearnHtml = () => {
    return (
        <>
            <Head>
                <title>HTML Tutorial | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.stickytab}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto vero labore laudantium quibusdam? Dolore nesciunt, commodi dignissimos recusandae pariatur quibusdam placeat earum quasi, eligendi nisi sunt? Excepturi maiores aspernatur delectus!
            </div>
            <div className={styles.htmltutbackground}>
                <div className={styles.leftsidebar}>
                    <div className="dggd">
                        {templates.map(cmsl => (
                            <div key={cmsl.id}>
                                <p>{cmsl['first_name']}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.pagecontent}>
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
                    <div className="pagecontentBottomborder">
                        &#10240;
                    </div>
                    <div className={styles.PageContentFooter}>

                        <div className={styles.toprightfootstuff}>
                            <div className={styles.backtotop}>
                                <Link href="#backtotop">
                                    <a>
                                        <p>Back To Top</p>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.footerlogo}>
                                <Image src="/devcrib2.png" width={160} height={101} alt="DevCrib" />
                            </div>
                            <p className={styles.forum_about}>
                                <Link href="/infographics/termsofservice">
                                    <a>TERMS OF SERVICE  </a>
                                </Link>
                                |
                                <Link href="/infographics/about">
                                    <a>  ABOUT</a>
                                </Link>
                            </p>
                        </div>
                        
                    </div>
                </div>






































            </div>
        </>
    );
}

export default LearnHtml;