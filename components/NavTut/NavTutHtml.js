import Link from 'next/link'

const NavTutHtml = () => {
    return (
        <>
            <div>
                <h2>HTML</h2>
                <Link href="#">
                    <a><h3>Learn HTML Basic</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn HTML Advanced</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn HTML Icons</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn HTML Forms</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>Learn HTML Canvas</h3></a>
                </Link>
                <Link href="#">
                    <a><h3>HTML Examples</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavTutHtml;