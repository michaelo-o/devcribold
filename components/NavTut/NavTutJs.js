import Link from 'next/link'

const NavTutJs = (props) => {

    const tutorial = props.tutorials 

    return (
        <>
            <div>
                <h2>JavaScript</h2>
                <Link href="#">
                    <a><h3 onClick={tutorial}>Learn JavaScript</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={tutorial}>Learn JavaScript Objects</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={tutorial}>Learn JavaScript Functions</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={tutorial}>Learn JavaScript Classes</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={tutorial}>JavaScript Examples</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavTutJs;