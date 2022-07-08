import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../tutorialgeneral.module.css"
import PageContentFooter from "../../../components/PageContentFooter";
import StickyNav from "./comps/StickyNav";
import HtmlLeftSidebar from "./comps/HtmlLeftSideBar";
// default imports
import commonaudio from "../../../jsons/tutorials/html/commonaudioformats.json"
import commonvideo from "../../../jsons/tutorials/html/commonvideo formats.json"

const Media = () => {

    // HTML ANGLE BRACKET

    const bro = <span className="tagcolor">&lt;</span>;
    const brc = <span className="tagcolor">&gt;</span>;


    // CSS CURLY BRACKET

    const cbro = <span className="curlybracket">&#123;</span>;
    const cbrc = <span className="curlybracket">&#125;</span>;

    return (
        <>
            <Head>
                <title>HTML Multimedia | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.gentutbackground}>

                <HtmlLeftSidebar />

                <div className={styles.pagecontent}>
                    <StickyNav />

                    <h1>HTML Multimedia</h1>

                    <h2>What is Multimedia?</h2>
                    <p>Multimedia comes in many different formats. It can be almost anything you can
                        hear or see, like images, music,
                        sound, videos, records, films, animations, and more.</p>

                    <p>Web pages often contain multimedia elements of different types and formats.</p>

                    <h2>Browser Support</h2>
                    <p>The first web browsers had support for text only, limited to a single font in a single color.</p>
                    <p>Later came browsers with support for colors, fonts, images, and multimedia!</p>
                    <h2>Multimedia Formats</h2>
                    <p>Multimedia elements (like audio or video) are stored in media files. </p>
                    <p>The most common way to discover the type of a file, is to look at the file
                        extension.</p>
                    <p>Multimedia files have formats and different extensions
                        like: .wav, .mp3, .mp4, .mpg, .wmv, and .avi.</p>

                    <h2>Common Video Formats</h2>

                    <table>
                        <tr>
                            <td style={{ "width": "225px" }}><Image src="/pic_video.jpg" alt="Videoformats" width={196} height={109} /></td>
                            <td style={{ "verticalAlign": "top" }}>There are many video formats out there. <br /> <br />
                                The MP4, WebM, and Ogg formats are supported by HTML. <br /> <br /> The MP4 format
                                is recommended by YouTube.</td>
                        </tr>
                    </table>

                    <table className={styles.reftable}>
                        <tr>
                            <th>Format</th>
                            <th>File</th>
                            <th>Description</th>
                        </tr>
                        {commonvideo.map(commonvideo => (
                            <tr key={commonvideo.id}>
                                <td>{commonvideo['Format']}</td>
                                <td>{commonvideo['File']}</td>
                                <td>{commonvideo['Description']}</td>
                            </tr>
                        ))}
                    </table>

                    <h2>Common Audio Formats</h2>
                    <p>MP3 is the best format for compressed recorded music. The
                        term MP3 has become synonymous with digital music.</p>
                    <p>If your website is about recorded music, MP3 is the choice.</p>

                    <table className={styles.reftable}>
                        <tr>
                            <th>Format</th>
                            <th>File</th>
                            <th>Description</th>
                        </tr>
                        {commonaudio.map(commonaudio => (
                            <tr key={commonaudio.id}>
                                <td>{commonaudio['Format']}</td>
                                <td>{commonaudio['File']}</td>
                                <td>{commonaudio['Description']}</td>
                            </tr>
                        ))}
                    </table>
                        
                            

                    <PageContentFooter />
                </div>

            </div>
        </>
    );
}

export default Media;