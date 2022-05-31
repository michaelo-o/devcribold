import Link from 'next/link'

const NavRefCss = () => {
    return (
        <>
            <div>
                <h2>CSS</h2>
                <Link href="#">
                    <a><h3>CSS Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>CSS Selector Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>CSS Property Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>CSS Function Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>CSS Unit Reference</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavRefCss;