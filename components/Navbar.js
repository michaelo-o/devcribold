import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Head>
                <link rel="icon" href="/favicon.png" />

            </Head>
            <div className="leftnavstuff">
                <Link href="/">
                    <a>
                        <Image src="/devcrib2.png" alt="site logo" width={128} height={77} />
                    </a>

                </Link>

                <p>Tutorials<Image src="/cdown.png" width={25} height={25} className="imgacenter" /></p>
                <p>References<Image src="/cdown.png" width={25} height={25} className="imgacenter" /></p>
                <p>Exercises<Image src="/cdown.png" width={25} height={25} className="imgacenter" /></p>

            </div>
            <div className="rightnavstuff">
                <button className="serbtn">
                    <Image
                        src="/whitesearch.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                    />
                </button>
                <Link href="https://ko-fi.com/michae_l#paypalModal">
                    <a target="_blank" className="paidc">Buy a Coffee 🙂☕</a>
                </Link>
                <p className="login">Log In</p>
            </div>

        </nav>
    );
}

export default Navbar;