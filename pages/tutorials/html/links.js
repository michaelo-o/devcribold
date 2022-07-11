import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import targetattr from "../../../jsons/tutorials/html/targetattr.json"

const Links = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;


    // <span className={styles.exptag}>&lt;form&gt;</span>

    return (
        <>
            <Head>
                <title>HTML Links | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />
                    <h1>HTML Links</h1>

                    <div className={styles.nextbutcont}>
                        <Link href="/tutorials/html/cssinhtml">
                            <a className={styles.prevbut}>Previous</a>
                        </Link>
                        <Link href="/tutorials/html/favicon">
                            <a className={styles.nextbut}>Next</a>
                        </Link>
                    </div>

                    <h2>HTML Links</h2>
                    <div className={styles.extraborder}>

                        <div className="embedDiv">
                            <iframe height="350" style={{ "width": "75%" }}
                                scrolling="no" title="Dummy Pen" src="https://codepen.io/_michaeli/embed/JjLKJmb?default-tab=html&editable=true&theme-id=dark" frameBorder="no" loading="lazy" allowtransparency={true} allowFullScreen={true}>
                                See the Pen <Link href="https://codepen.io/_michaeli/pen/JjLKJmb"><a>
                                    Dummy Pen</a></Link> by Michael Okwuosah (<Link href="https://codepen.io/_michaeli"><a>@_michaeli</a></Link>)
                                on <Link href="https://codepen.io"><a>CodePen.</a></Link>
                            </iframe>
                        </div>
                    </div>


                    <ul>
                        <li>All HTML elements can have <b>Links</b></li>
                        <li>Links provide <b>additional information</b> about elements</li>
                        <li>Links are always specified in <b>the start tag</b></li>
                        <li>Links usually come in name/value pairs like: <b>name=&quot;value&quot;</b></li>
                    </ul>

                    <h2>The href Attribute</h2>
                    <p>The <span className={styles.exptag}>&lt;a&gt;</span> tag defines a hyperlink. The
                        <span className={styles.exptag}>href</span> attribute specifies the URL of the page
                        the link goes to:</p>

                    <h2>The src Attribute</h2>
                    <p>The <span className={styles.exptag}>&lt;img&gt;</span> tag is used to embed an
                        image in an HTML page. The <span className={styles.exptag}>src</span> attribute
                        specifies the path to the image to be displayed:</p>

                    <p>There are two ways to specify the URL in the <span className={styles.exptag}>src</span>
                        attribute:</p>
                    <p><strong>1. Absolute URL</strong> - Links to an external image that is hosted
                        on another website. Example: <span style={{ "wordWrap": "breakWord;" }}>src=&quot;https://www.google.com/images/img_girl.jpg&quot;</span>.</p>
                    <p><strong>Notes:</strong> External images might be under copyright. If you do
                        not get permission to use it, you may be in violation of copyright laws. In
                        addition, you cannot control external images; it can suddenly be removed or
                        changed.</p>
                    <p><strong>2. Relative URL</strong> - Links to an image that is hosted within
                        the website. Here, the URL does not include the domain name. If the URL begins
                        without a slash, it will be relative to the current page. Example: src=&quot;img_girl.jpg&quot;.
                        If the URL begins with a slash, it will be relative to the domain. Example: src=&quot;/images/img_girl.jpg&quot;.</p>
                    <p><strong>Tip:</strong> It is almost always best to use relative URLs. They
                        will not break if you change domain.</p>

                    <h2>The width and height Links</h2>
                    <p>The <span className={styles.exptag}>&lt;img&gt;</span> tag should also contain the
                        <span className={styles.exptag}>width</span> and <span className={styles.exptag}>
                            height</span> Links, which specifies the width and
                        height of the image (in pixels):</p>



                    <h2>The alt Attribute</h2>
                    <p>The required <span className={styles.exptag}>alt</span> attribute for the <span className={styles.exptag}>&lt;img&gt;</span>
                        tag specifies an
                        alternate text for an image, if the image for some reason cannot be displayed.
                        This can be due to
                        slow connection, or an error in the <span className={styles.exptag}>src</span> attribute, or if the user uses a screen
                        reader.</p>




                    <h2>The style Attribute</h2>
                    <p>The <span className={styles.exptag}>style</span> attribute is used to add styles to
                        an element, such as color, font, size, and more.</p>



                    <h2>The lang Attribute</h2>
                    <p>You should always include the <span className={styles.exptag}>lang</span> attribute
                        inside the <span className={styles.exptag}>&lt;html&gt;</span> tag, to declare the
                        language of the Web page. This is meant to assist search engines and browsers.</p>
                    <p>The following example specifies English as the language:</p>

                    <p>Country codes can also be added to the language code in the <span className={styles.exptag}>lang</span>
                        attribute. So, the first two characters define the language of the HTML page,
                        and the last two characters define the country.</p>
                    <p>The following example specifies English as the language and United States as
                        the country:</p>


                    <h2>The title Attribute</h2>
                    <p>The <span className={styles.exptag}>title</span> attribute defines some extra
                        information about an
                        element.</p>
                    <p>The value of the title attribute will be displayed as a tooltip when
                        you mouse over the element:</p>



                    <h2>We Suggest: Always Use Lowercase Links</h2>
                    <p>The HTML standard does not require lowercase attribute names.</p>
                    <p>The title attribute (and all other Links) can be written with uppercase or lowercase
                        like <strong>title</strong> or <strong>TITLE</strong>.</p>
                    <p>However, W3C <strong>recommends</strong> lowercase Links in HTML, and <strong>demands</strong>
                        lowercase Links for stricter document types like XHTML.</p>
                    <p>At DevCrib we always use lowercase attribute names.</p>


                    <h2>We Suggest: Always Quote Attribute Values</h2>
                    <p>The HTML standard does not require quotes around attribute values.</p>
                    <p>However, W3C <b>recommends</b> quotes in HTML, and <strong>demands</strong> quotes for
                        stricter document types like XHTML.</p>

                    <p>Sometimes you have to use quotes. This example will not display
                        the title attribute correctly, because it contains a space:</p>


                    <h2>Single or Double Quotes?</h2>
                    <p>Double quotes around attribute values are the most common in HTML, but single
                        quotes can also be used.</p>
                    <p>In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:</p>



                    <h2>Chapter Summary</h2>
                    <ul>
                        <li>All HTML elements can have <strong>Links</strong></li>
                        <li>The <span className={styles.exptag}>href</span> attribute of <span className={styles.exptag}>
                            &lt;a&gt;</span> specifies the URL of the page the link goes to</li>
                        <li>The <span className={styles.exptag}>src</span> attribute of <span className={styles.exptag}>
                            &lt;img&gt;</span> specifies the path to the image to be displayed</li>
                        <li>The <span className={styles.exptag}>width</span> and <span className={styles.exptag}>height</span> Links
                            of <span className={styles.exptag}>&lt;img&gt;</span> provide size information for images</li>
                        <li>The <span className={styles.exptag}>alt</span> attribute of <span className={styles.exptag}>
                            &lt;img&gt;</span> provides an alternate text for an image</li>
                        <li>The <span className={styles.exptag}>style</span> attribute is used to add styles
                            to an element, such as color, font, size, and more</li>
                        <li>The <span className={styles.exptag}>lang</span> attribute
                            of the <span className={styles.exptag}>&lt;html&gt;</span> tag declares the
                            language of the Web page</li>
                        <li>The <span className={styles.exptag}>title</span> attribute defines some extra
                            information about an element</li>
                    </ul>




                    <PageContentFooter />
                </div>
            </div>

        </>
    );
}

export default Links;