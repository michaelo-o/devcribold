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
                            <h1 style={{ fontSize: "50px" }}>3</h1>
                            <h1>JavaScript</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.whatsnext}>
                    <div className={styles.innerwn}>
                        <h1>Now, What Next?</h1>
                        <h3>Now you know how to use HTML, CSS, and JavaScript <br /> to create, style, and make interactive web pages.</h3>
                        <h3>The <span className={styles.nextstep}>next step</span> is to publish your website, <br /> so that the rest of the world can see your work. </h3>
                        <h3> There are tons of hosting services to choose from. A few Examples are; <br />
                            <Link href="https://www.hostinger.com/">
                                <a target="blank">Hostinger, </a>
                            </Link>
                            <Link href="https://www.bluehost.com/">
                                <a target="blank">Bluehost, </a>
                            </Link>
                            <Link href="https://www.dreamhost.com/">
                                <a target="blank">DreamHost, </a>
                            </Link>
                            <Link href="https://www.hostgator.com/">
                                <a target="blank">Hostgator </a>
                            </Link>
                            etc.
                        </h3>
                    </div>
                </div>
                <div className={styles.hellofronted}>
                    <div className={styles.innerhfed}>
                        <h1>Hello, <br /> Front-End Web Developer.</h1>
                        <h3>People who create websites and web applications for a living, are called <span className={styles.fronted}>Front-End Developers</span>.</h3>
                        <h3>Tip: Many Front-End Developers also have basic knowledge of <br /> different CSS and JavaScript frameworks and libraries, like; <br />
                            <Link href="#">
                                <a target="blank">Bootstrap, </a>
                            </Link>
                            <Link href="#">
                                <a target="blank">SASS (CSS pre-processor), </a>
                            </Link>
                            <Link href="#">
                                <a target="blank">jQuery, </a>
                            </Link>
                            and
                            <Link href="#">
                                <a target="blank">React, </a>
                            </Link>
                            <br />
                            and , the popular version control system,
                            <Link href="#">
                                <a target="blank">Git.</a>
                            </Link>
                        </h3>
                    </div>
                </div>
                <div className={styles.gradient}>
                    <p> </p>
                </div>
                <div className={styles.asfbackend}>
                    <div className={styles.innerbend}>
                        <h1>As for the Back-End...</h1>
                        <h3><span className={styles.bend_un}>Front-end</span> development refers to the <span className={styles.bend_un}>client</span>-side (how a web page <span className={styles.bend_un}>looks</span>). <br />
                            <span className={styles.bend_un}>Back-end</span> development refers to the <span className={styles.bend_un}>server</span>-side (how a web page <span className={styles.bend_un}>works</span>). </h3>
                        <h3>Front-end code is used to create static websites, where the purpose is to display the web page. <br /> However, if you want to make your website dynamic <br />  (manage files and databases, add contact forms, control user-access, etc.), <br /> you need to learn a back-end programming language, like; <br />
                            <Link href="#">
                                <a target="blank">PHP, </a>
                            </Link>
                            <Link href="#">
                                <a target="blank">Python, </a>
                            </Link>
                            and use
                            <Link href="#">
                                <a target="blank"> SQL, </a>
                            </Link>
                            to communicate with databases.
                            <h3>
                                A list of other popular languages can be found on the
                                <Link href="/">
                                    <a> Homepage</a>
                                </Link>.
                            </h3>
                        </h3>
                    </div>
                </div>






















            </div>
        </>


    );
}

export default WheretoBegin;