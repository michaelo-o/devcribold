import Link from "next/link";
import Image from "next/dist/client/image";
const Footer = () => {
    return (
        <div className="footer">
            <div className="backtotop">
                <Link href="/">
                    <a>
                        <p>Back To Home/Top <Image src="/backtotop-greyish.png" width={20} height={20} /></p>
                    </a>
                </Link>
            </div>
            <div className="toprightfootstuff">
                <p>
                    <Link href="#">
                        <a>FORUM </a>
                    </Link>
                    |
                    <Link href="#">
                        <a> ABOUT</a>
                    </Link>
                </p>
            </div>
            <div className="middlefooterstuff">
                <Link href="#">
                    <a target="_blank">
                        <Image src="/facebook.png" width={20} height={20} />
                    </a>
                </Link>

                <Link href="#">
                    <a target="_blank">
                        <Image src="/insta.png" width={20} height={20} />
                    </a>
                </Link>

                <Link href="#">
                    <a target="_blank">
                        <Image src="/twitter.png" width={20} height={20} />
                    </a>
                </Link>

                <Link href="#">
                    <a target="_blank">
                        <Image src="/linkedin.png" width={20} height={20} />
                    </a>
                </Link>

                <Link href="#">
                    <a target="_blank">
                        <Image src="/upwork.png" width={36} height={21} />
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
        </div>
    );
};

export default Footer;
