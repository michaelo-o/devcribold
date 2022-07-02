import Link from 'next/link'

const NavRefJs = (props) => {

    const references = props.references 

    return (
        <>
            <div>
                <h2>JavaScript</h2>
                <Link href="#">
                    <a><h3 onClick={references}>JavaScript Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>JavaScript Class Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>JavaScript Array Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>JavaScript String Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>JavaScript Global Reference</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavRefJs;