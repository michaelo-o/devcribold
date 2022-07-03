import Link from 'next/link'

const NavRefHtml = (props) => {

    const references = props.references

    return (
        <>
            <div>
                <h2>HTML</h2>
                <Link href="#">
                    <a><h3 onClick={references}>HTML Tag Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>HTML Color Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>HTML Attribute Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>HTML Event Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>HTML Media Reference</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavRefHtml;