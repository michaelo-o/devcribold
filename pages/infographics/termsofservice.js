import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./infogen.module.css"
import Footer from "../../components/Footer";
import InfoGraphSideBar from "./InfoGraphSideBar";
import PageContentFooter from "../../components/PageContentFooter";

const TermsOfService = () => {

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    return (
        <>
            <Head>
                <title>Terms Of Sevrice | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <InfoGraphSideBar />

                <div className={styles.pagecontent}>

                    <h1>Terms Of Sevrice</h1>
                    <div className={styles.extraborder}>

                        <h2>Overview</h2>
                        <p>Throughout the site, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to DevCrib's developer and Editors.</p>
                        <p>By visiting our site and/or purchasing something from us, you engage in our
                            &quot;Service&quot; and agree to be bound by the following terms and conditions (&quot;Terms of
                            Service&quot;, &quot;Terms&quot;), including those additional terms and conditions and policies
                            referenced herein and/or available by hyperlink. These Terms of Service apply to
                            all users of the site, including without limitation users who are browsers,
                            vendors, customers, merchants, and/or contributors of content.</p> <br />
                        <p>Please read these Terms of Service carefully before accessing or using our
                            website or services. By accessing or using any part of the site, you agree to be
                            bound by these Terms of Service. If you do not agree to all the terms and
                            conditions of this agreement, then you may not access the website or use any
                            services.</p> <br />
                        <p>Any new features or tools which are added to the current site shall also be
                            subject to the Terms of Service. You can review the most current version of the
                            Terms of Service at any time on this page. We reserve the right to update,
                            change or replace any part of these Terms of Service by posting updates and/or
                            changes to our website. It is your responsibility to check this page
                            periodically for changes. Your continued use of or access to the website
                            following the posting of any changes constitutes acceptance of those changes.</p>

                    </div>
                    <div className={styles.extraborder}>

                        <h2>General Condition</h2>
                        <p>We reserve the right to refuse service to anyone for any reason at any time.</p>

                    </div>

                    <div className={styles.extraborder}>
                        <h2>Accuracy, Completeness and Timeliness of Information </h2>
                        <p>We are not responsible if information made available on our sites is
                            incomplete or invalid.</p> <br />
                        <p>The material on this site is provided for general information only and should
                            not be relied upon or used as the sole basis for making decisions without
                            consulting primary, more accurate, more complete or more timely sources of
                            information. Any reliance on the material on this site is at your own risk.</p> <br />
                        <p>This site may contain certain historical information. Historical information,
                            necessarily, is not current and is provided for your reference only. We reserve
                            the right to modify the contents of this site at any time, but we have no
                            obligation to update any information on our site. You agree that it is your
                            responsibility to monitor changes to our site.</p>
                    </div>


                    <div className={styles.extraborder}>
                        <h2>Errors, Inaccuracies and Omissions</h2>
                        <p>Occasionally there may be information on our site or in the Service that
                            contains typographical errors, inaccuracies or omissions that may relate to
                            product descriptions, pricing, promotions, offers, product shipping charges,
                            transit times and availability. We reserve the right to correct any errors,
                            inaccuracies or omissions, and to change or update information or cancel orders
                            if any information in the Service or on any related website is inaccurate at any
                            time without prior notice (including after you have submitted your order).</p> <br />
                        <p>We undertake no obligation to update, amend or clarify information in the
                            Service or on any related website, including without limitation, pricing
                            information, except as required by law. No specified update or refresh date
                            applied in the Service or on any related website, should be taken to indicate
                            that all information in the Service or on any related website has been modified
                            or updated.</p>
                    </div>


                    <div className={styles.extraborder}>
                        <h2>Entire Agreement</h2>
                        <p>The failure of us to exercise or enforce any right or provision of these
                            Terms of Service shall not constitute a waiver of such right or provision.</p>
                        <p>These Terms of Service and any policies or operating rules posted by us on
                            this site or in respect to The Service constitutes the entire agreement and
                            understanding between you and us and govern your use of the Service, superseding
                            any prior or contemporaneous agreements, communications and proposals, whether
                            oral or written, between you and us (including, but not limited to, any prior
                            versions of the Terms of Service).</p>
                        <p>Any ambiguities in the interpretation of these Terms of Service shall not be
                            construed against the drafting party.</p>

                    </div>


                    <div className={styles.extraborder}>
                        <h2>Changes to Terms of Service</h2>
                        <p>You can review the most current version of the Terms of Service at any time
                            at this page.</p>
                        <p>We reserve the right, at our sole discretion, to update, change or replace
                            any part of these Terms of Service by posting updates and changes to our
                            website. It is your responsibility to check our website periodically for
                            changes.</p>
                        <p>Your continued use of or access to our website or the Service following the
                            posting of any changes to these Terms of Service constitutes acceptance of those
                            changes.</p>
                    </div>

                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default TermsOfService;