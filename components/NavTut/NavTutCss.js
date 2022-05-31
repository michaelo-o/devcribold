import Link from 'next/link'

const NavTutCss = () => {
    return (
        <>
            <div>
                <h2>CSS</h2>
                <Link href="#">
                    <a><h3>Learn CSS Basic</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn CSS Advanced</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn CSS Colors</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn CSS Grid</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn CSS RWD</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>CSS Examples</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavTutCss;