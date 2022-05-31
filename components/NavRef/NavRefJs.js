import Link from 'next/link'

const NavRefJs = () => {
    return (
        <>
            <div>
                <h2>JavaScript</h2>
                <Link href="#">
                    <a><h3>JavaScript Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>JavaScript Class Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>JavaScript Array Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>JavaScript String Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>JavaScript Global Reference</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavRefJs;