import Link from 'next/link'

const NavRefCss = (props) => {

    const references =  props.references 

    return (
        <>
            <div>
                <h2>CSS</h2>
                <Link href="#">
                    <a><h3 onClick={references}>CSS Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>CSS Selector Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>CSS Property Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>CSS Function Reference</h3></a>
                </Link>
                <Link href="#">
                    <a><h3 onClick={references}>CSS Unit Reference</h3></a>
                </Link>
            </div>
        </>
    );
}

export default NavRefCss;