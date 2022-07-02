import Link from 'next/link'

const NavTutJs = () => {
    return (
        <>
            <div>
                <h2>JavaScript</h2>
                <Link href="#">
                    <a><h3>Learn JavaScript</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn JavaScript Objects</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn JavaScript Functions</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn JavaScript Classes</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>JavaScript Examples</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavTutJs;