import Head from "next/head";
import styles from '../../styles/wheretobegin.module.css'
import Link from 'next/link'



const WheretoBegin = () => {
    return (
        <>

            <Head>
                <title>Dev Crib | Where to begin your Front-End Web Developer Career</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.w2bcontent}>

                <div className={styles.wheretobegin}>
                    <div className={styles.innerw2b}>
                        <h1>Where to Begin</h1>
                        <h3>To kickstart your Front-End Web developer career, <br /> start with the topics listed below, in the  order in which they are listed.</h3>
                    </div>
                </div>

                <div className={styles.w2bhtml}>
                    <div className={styles.hticketcontainer1}>
                        <div className={styles.w2bhtmlticket}>
                            <p> </p>
                        </div>
                        <div className={styles.w2bhtmlticket2}>
                            <p> </p>
                        </div>

                    </div>
                    <div className={styles.hticketcontainer2}>
                        <div className={styles.w2bhtmlticket3}>
                            <p> </p>
                        </div>
                        <div className={styles.w2bhtmlticket4}>
                            <p> </p>
                        </div>
                    </div>
                    <div className={styles.hticketcontainer3}>
                        <div className={styles.w2bhtmlticket5}>
                            <h3>Create your first web page</h3>
                            <p>The first thing you have to learn, is HTML, which is the standard markup language for creating web pages. </p>
                            <Link href="#">
                                <a> <h4>Learn HTML</h4></a>
                            </Link>
                        </div>
                        <div className={styles.w2bhtmlticket6}>
                            <h1>1</h1>
                            <h1>HTML</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.w2bhtml}>
                    <div className={styles.cticketcontainer1}>
                        <div className={styles.w2bcssticket}>
                            <p> </p>
                        </div>
                        <div className={styles.w2bcssticket2}>
                            <p> </p>
                        </div>

                    </div>
                    <div className={styles.cticketcontainer2}>
                        <div className={styles.w2bcssticket3}>
                            <p> </p>
                        </div>
                        <div className={styles.w2bcssticket4}>
                            <p> </p>
                        </div>
                    </div>
                    <div className={styles.cticketcontainer3}>
                        <div className={styles.w2bcssticket5}>
                            <h3>Style your web page</h3>
                            <p>The next step is to learn CSS, to set the layout of your web page with beautiful colors, fonts, and much more.</p>
                            <Link href="#">
                                <a> <h4>Learn CSS</h4></a>
                            </Link>
                        </div>
                        <div className={styles.w2bcssticket6}>
                            <h1>2</h1>
                            <h1>CSS</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.w2bhtml}>
                    <div className={styles.jticketcontainer1}>
                        <div className={styles.w2bjsticket}>
                            <p> </p>
                        </div>
                        <div className={styles.w2bjsticket2}>
                            <p> </p>
                        </div>

                    </div>
                    <div className={styles.jticketcontainer2}>
                        <div className={styles.w2bjsticket3}>
                            <p> </p>
                        </div>
                        <div className={styles.w2bjsticket4}>
                            <p> </p>
                        </div>
                    </div>
                    <div className={styles.jticketcontainer3}>
                        <div className={styles.w2bjsticket5}>
                            <h3>Make your web page interactive</h3>
                            <p>After studying HTML and CSS, you should learn JavaScript to create dynamic and interactive web pages for your users.</p>
                            <Link href="#">
                                <a> <h4>Learn JavaScript</h4></a>
                            </Link>
                        </div>
                        <div className={styles.w2bjsticket6}>
                            <h1>3</h1>
                            <h1>JavaScript</h1>
                        </div>
                    </div>
                </div>




















            </div>
        </>


    );
}

export default WheretoBegin;