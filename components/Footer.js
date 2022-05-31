import Link from "next/link";
import Image from "next/dist/client/image";
import styles from '../styles/footer.module.css'



const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.toprightfootstuff}>
                <div className={styles.backtotop}>
                    <Link href="/">
                        <a>
                            <p>Back To Home</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.footerlogo}>
                    <Image src="/devcrib2.png" width={160} height={101} />
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
            <div className={styles.middlefooterstuff}>
                <Link href="https://web.facebook.com/michael.okwuosah">
                    <a target="_blank">
                        <Image src="/fbcolor.png" width={25} height={25} />
                    </a>
                </Link>

                <Link href="https://www.instagram.com/_michaeli/">
                    <a target="_blank">
                        <Image src="/igcolor.png" width={25} height={25} />
                    </a>
                </Link>

                <Link href="https://twitter.com/OkwuosahMike">
                    <a target="_blank">
                        <Image src="/twittercolor.png" width={25} height={25} />
                    </a>
                </Link>

                <Link href="https://www.linkedin.com/in/michael-okwuosah-b92279160/">
                    <a target="_blank">
                        <Image src="/lincolor.png" width={25} height={25} />
                    </a>
                </Link>

                <Link href="https://www.upwork.com/freelancers/~018a014dbbe3506e8b?s=1110580755057594368">
                    <a target="_blank">
                        <Image src="/upwork-svgrepo-com.svg" width={25} height={25} />
                    </a>
                </Link>
            </div>
            <div className={styles.project}>
                <p>
                    Final Year Project by
                    <Link href="https://www.upwork.com/freelancers/~018a014dbbe3506e8b?s=1110580755057594368">
                        <a target="_blank"> Michael Okwuosah</a>
                    </Link>
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={styles.randombtn}>
                <Link href="https://www.bellsuniversity.edu.ng">
                    <a target="_blank">Submitted to Bells University of Technology</a>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
