import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {

  // HTML ANGLE BRACKET
  const BracketOpen = '<';
  const BracketClose = '>';

  const BrO = <span className="tagcolor">{BracketOpen}</span>;
  const BrC = <span className="tagcolor">{BracketClose}</span>;


  // CSS CURLY BRACKET

  const CurlyBracketOpen = '{';
  const CurlyBracketClose = '}';

  const CBrO = <span className="curlybracket">{CurlyBracketOpen}</span>;
  const CBrC = <span className="curlybracket">{CurlyBracketClose}</span>;

  return (
    <>

      <Head>
        <title>Dev Crib | Your Front-End Developer Hub</title>
        <meta name="description" content="Dev Crib" />
      </Head>
      <div className="content">
        <div className="learntocode">
          <div className="innerlearntocode">
            <h1>Learn to Code</h1>
            <h3>Kick start your Front-End Web Developer Career</h3>
            <Link href="#">
              <a> <h4>Having trouble Deciding Where to Begin?</h4></a>
            </Link>
          </div>
        </div>
        <div className="gradient1">
          <p> </p>
        </div>
        <div className="learnhtml">
          <div className="leftlearnhtml">
            <h1>Learn</h1>
            <h1>HTML</h1>
            <h3>The building blocks that make up the bodies of all Web Pages</h3>
            <h4>Learn HTML</h4>
            <h4>HTML References</h4>
          </div>
          <div className="rightlearnhtml">
            <div className="innerrlh">
              <h2>HTML Example: </h2>
              <div className="innerrlhexample">
                <p className="inlinehtml">
                  {BrO}!DOCTYPE <span className="attributecolor">html</span>{BrC} <br />
                  {BrO}html{BrC} <br />
                  {BrO}title{BrC}<span>HTML Tutorial</span>{BrO}/title{BrC} <br />
                  {BrO}body{BrC}
                  <br />
                  <br />
                  {BrO}h1{BrC}<span>This is a heading</span>{BrO}/h1{BrC} <br />
                  {BrO}p{BrC}<span>This is a paragraph.</span>{BrO}/p{BrC}
                  <br />
                  <br />
                  {BrO}/body{BrC} <br />
                  {BrO}/html{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient2">
          <p> </p>
        </div>
        <div className="learncss">
          <div className="leftlearncss">
            <div className="innerllc">
              <h2>CSS Example:</h2>
              <div className="innerllcexample">
                <p className="inlinecss">
                  <span className="cssselector">body</span> {CBrO}  <br />
                  <span className="cssselector">background-color:</span> lightblue;  <br />
                  {CBrC}
                  <br />
                  <br />
                  h1 {CBrO}  <br />
                  <span className="cssselector">color:</span> white;  <br />
                  <span className="cssselector">text-align:</span> center;  <br />
                  {CBrC}
                </p>
              </div>
            </div>
          </div>
          <div className="rightlearncss">
            <h1>Learn</h1>
            <h1>CSS</h1>
            <h3>The stlying language that beautifies all Web Pages</h3>
            <h4>Learn CSS</h4>
            <h4>CSS References</h4>
          </div>
        </div>
        <div className="learnjavascript">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet vitae amet, nulla dolore similique quod. Temporibus quaerat laborum nemo adipisci ipsa! Pariatur in corporis quas nihil debitis voluptates dolores!
        </div>



















      </div>























    </>
  )
}
