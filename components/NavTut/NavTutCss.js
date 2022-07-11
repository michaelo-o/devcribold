import Link from 'next/link'

const NavTutCss = (props) => {

    const tutorial = props.tutorials

    return (
        <>
            <div>
                <h2>CSS</h2>
                <Link href="/tutorials/css/">
                    <a><h3 onClick={tutorial}>Learn CSS Basic</h3></a>
                </Link>
                <Link href="/tutorials/css/roundedcorners">
                    <a><h3 onClick={tutorial}>Learn CSS Advanced</h3></a>
                </Link>
                <Link href="/tutorials/css/colors">
                    <a><h3 onClick={tutorial}>Learn CSS Colors</h3></a>
                </Link>
                <Link href="/tutorials/css/rwd">
                    <a><h3 onClick={tutorial}>Learn CSS RWD</h3></a>
                </Link>
                <Link href="/tutorials/css/examples">
                    <a><h3 onClick={tutorial}>CSS Examples</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavTutCss;