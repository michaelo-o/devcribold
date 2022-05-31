import Link from 'next/link'

const NavRefHtml = () => {
    return (
        <>
            <div>
                <h2>HTML</h2>
                <Link href="#">
                    <a><h3>HTML Tag Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>HTML Color Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>HTML Attribute Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>HTML Event Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>HTML Canvas Reference</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavRefHtml;