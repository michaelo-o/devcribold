import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./infogen.module.css"
import Footer from "../../components/Footer";
import InfoGraphSideBar from "./InfoGraphSideBar";
import PageContentFooter from "../../components/PageContentFooter";

const PrivacyPolicy = () => {

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    return (
        <>
            <Head>
                <title>Privacy Policy | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <InfoGraphSideBar />

                <div className={styles.pagecontent}>

                    <h1>Privacy Policy</h1>
                    <div className={styles.extraborder}>
                        <h2>Do not track</h2>
                        <p>Please note that we do not alter our Site&apos;s data collection and use practices
                            when we see a Do Not Track signal from your browser.</p>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Changes</h2>
                        <p>We may update this privacy policy from time to time in order to reflect, for
                            example, changes to our practices or for other operational, legal or regulatory
                            reasons. </p>
                    </div>
                    <div className={styles.extraborder}>

                        <h2>Links</h2>
                        <p>DevCrib contains links to other sites. We are not responsible for the privacy practices or the content of such Web sites.
                            This privacy document applies only to DevCrib.</p>
                    </div>
                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default PrivacyPolicy;