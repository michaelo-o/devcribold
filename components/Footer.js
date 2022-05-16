import Link from "next/link";
import Image from "next/dist/client/image";
const Footer = () => {
    return (
        <div className="footer">

            <div className="toprightfootstuff">
                <div className="backtotop">
                    <Link href="/">
                        <a>
                            <p>Back To Home/Top <Image src="/backtotop-greyish.png" width={20} height={20} /></p>
                        </a>
                    </Link>
                </div>
                <p className="forum-about">
                    <Link href="infographics/forum">
                        <a>FORUM  </a>
                    </Link>
                    |
                    <Link href="/infographics/about">
                        <a>  ABOUT</a>
                    </Link>
                </p>
            </div>
            <div className="middlefooterstuff">
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
            <div className="project">
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
            <div className="randombtn">
                <p>Random</p>
            </div>
        </div>
    );
};

export default Footer;
