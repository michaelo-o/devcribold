import Link from 'next/link'

const NavTutHtml = (props) => {

    const tutorial = props.tutorials

     return (
        <>
            <div>
                <h2>HTML</h2>
                <Link href="/tutorials/html">
                    <a><h3 onClick={tutorial}>Learn HTML</h3></a>
                </Link>
                 <Link href="/tutorials/html/classes">
                     <a><h3 onClick={tutorial}>Learn HTML Classes</h3></a>
                </Link>
                <Link href="/tutorials/html/forms">
                    <a><h3 onClick={tutorial}>Learn HTML Forms</h3></a>
                </Link>
                <Link href="/tutorials/html/media">
                    <a><h3 onClick={tutorial}>Learn HTML Media</h3></a>
                </Link>
                <Link href="/tutorials/html/examples">
                    <a><h3 onClick={tutorial}>HTML Examples</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavTutHtml;