import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

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
                <p>Tutorials</p>
                <p>References</p>
                <p>Exercises</p>
            </div>
            <div className="rightnavstuff">
                <p className="btn">
                    <Image
                        src="/whitesearch.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                    />
                </p>
                <p>Paid Courses</p>
                <p>Log In</p>

            </div>

        </nav>
    );
}

export default Navbar;