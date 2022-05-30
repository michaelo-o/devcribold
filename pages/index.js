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

  // &#39;  ---  '

  //  &#34; --- " 

  return (
    <>

      <Head>
        <title>Dev Crib | Your Front-End Developer Hub</title>
        <meta name="description" content="Dev Crib" />
      </Head>
      <div className="content">
        <div className={styles.learntocode}>
          <div className={styles.lltc}>
            <h1><span className={styles.lltclearn}>Learning</span> to <span className={styles.lltccode}>Code</span> has never been <span className={styles.lltceasier}>easier</span>.</h1>
            <div className={styles.lltcp}>
              <p>Dev Crib is a Front-end Web Developer Hub that&#39;s here to help you kick start your career as a Front-End Web Developer with ease.</p>
              <p>Focused on modern web standards and web app UX, Dev Crib would simply teach you how to build better websites. By the time you&#39;re done, people are gonna love using your stuff!</p>
            </div>
            {/* <h3>Kick start your Front-End Web Developer Career</h3> */}
            <Link href="/infographics/wheretobegin">
              <a> <h4>Having trouble Getting Started?</h4></a>
            </Link>
          </div>
          <div className={styles.rltc}>
            <div className={styles.innerrltc}>
              <div className={styles.innerrltcexample}>
                <p className="inlinehtml">
                  {BrO}!DOCTYPE <span className="attributecolor">html</span>{BrC} <br />
                  {BrO}html{BrC} <br />
                  <br />
                  {BrO}head{BrC} <br />
                  {BrO}title{BrC}<span>HTML Tutorial</span>{BrO}/title{BrC} <br />
                  {BrO}style{BrC} <br />
                  <span className="inlinecss">
                    body {CBrO}  <br />
                    <span className="cselector">background-color:</span> <span className="cssvalue">lightblue</span>;  <br />
                    {CBrC}
                    <br />
                    <br />
                    #datesample {CBrO}  <br />
                    <span className="cselector">font-size:</span> <span className="cssvalue">28px</span>;  <br />
                    <span className="cselector">font-family:</span> <span className="cssvalue">&#34;Source Sans Pro&#34;</span>;  <br />
                    {CBrC}
                  </span> <br />
                  {BrO}/style{BrC} <br />
                  <p className="inlinejs">
                    {BrO}script{BrC} <br />
                    <span className="jsvh">function</span> myFunction() &#123; <br />
                    <span className="tabbedjs"><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;demo&#34;</span>); <br /></span>
                    <span className="tabbedjs">x.style.fontSize = <span className="jsfunval">&#34;25px&#34;</span>; <br /></span>
                    <span className="tabbedjs"> x.style.color = <span className="jsfunval">&#34;red&#34;</span>; <br />
                    </span>
                    {CBrC} <br />
                    <br />
                    <span className="jsvh">const</span><span> d =</span> <span className="jsvh">new</span> <span>Date();</span> <br />
                    <span><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;datesample&#34;</span>).innerHTML = d;</span> <br />
                    {BrO}/script{BrC}
                  </p>
                  {BrO}/head{BrC} <br />
                  <br />
                  {BrO}body{BrC}
                  <br />
                  <br />
                  {BrO}h1{BrC}<span>This is a heading</span>{BrO}/h1{BrC} <br />
                  {BrO}h2{BrC}<span>This is a Sub-heading</span>{BrO}/h2{BrC} <br />
                  <br />
                  {BrO}p{BrC}<span>This is a paragraph.</span>{BrO}/p{BrC}
                  <p className="inlinejs">
                    {BrO}button <span className="jsvh">onclick</span>=&#34;myFunction()&#34;{BrC}<span>Click Me!</span>{BrO}/button{BrC}
                  </p>
                  {BrO}/body{BrC} <br />
                  {BrO}/html{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>
<div className="texcfst">

</div>
        <div className="learnhtml">
          <div className="leftlearnhtml">
            <h1>Learn</h1>
            <h1>HTML</h1>
            <h3>The building blocks that make up the bodies of all Web Pages</h3>
            <Link href="#">
              <a> <h4>Learn HTML</h4></a>
            </Link>
            <Link href="#">
              <a> <h4>HTML References</h4></a>
            </Link>
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
                  {BrO}h2{BrC}<span>This is a Sub-heading</span>{BrO}/h2{BrC} <br />
                  <br />
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


        <div className="learncss">
          <div className="leftlearncss">
            <div className="innerllc">
              <h2>CSS Example:</h2>
              <div className="innerllcexample">
                <p className="inlinecss">
                  body {CBrO}  <br />
                  <span className="cselector">background-color:</span> <span className="cssvalue">lightblue</span>;  <br />
                  {CBrC}
                  <br />
                  <br />
                  h1 {CBrO}  <br />
                  <span className="cselector">color:</span> <span className="cssvalue">white</span>;  <br />
                  <span className="cselector">text-align:</span> <span className="cssvalue">center</span>;  <br />
                  {CBrC}
                  <br />
                  <br />
                  .sampleclass {CBrO} <br />
                  <span className="cselector">display:</span> <span className="cssvalue">flex</span>; <br />
                  <span className="cselector">flex-direction</span> <span className="cssvalue">row</span>; <br />
                  {CBrC}
                </p>
              </div>
            </div>
          </div>
          <div className="rightlearncss">
            <h1>Learn</h1>
            <h1>CSS</h1>
            <h3>The stlying language that beautifies all Web Pages</h3>
            <Link href="#">
              <a> <h4>Learn CSS</h4></a>
            </Link>
            <Link href="#">
              <a> <h4>CSS References</h4></a>
            </Link>
          </div>
        </div>


        <div className="learnjavascript">
          <div className="leftlearnjs">
            <h1>Learn</h1>
            <h1>JavaScript</h1>
            <h3>The scripting language used for programming Web Pages</h3>
            <Link href="#">
              <a> <h4>Learn JavaScript</h4></a>
            </Link>
            <Link href="#">
              <a> <h4>JavaScript References</h4></a>
            </Link>
          </div>
          <div className="rightlearnjs">
            <div className="innerrlj">
              <h2>JavaScript Example: </h2>
              <div className="innerrljexample">
                <p className="inlinejs">
                  {BrO}button <span className="jsvh">onclick</span>=&#34;myFunction()&#34;{BrC}<span>Click Me!</span>{BrO}/button{BrC}
                  <br />
                  <br />
                  {BrO}script{BrC} <br />
                  <span className="jsvh">function</span> myFunction() &#123; <br />
                  <span className="tabbedjs"><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;demo&#34;</span>); <br /></span>
                  <span className="tabbedjs">x.style.fontSize = <span className="jsfunval">&#34;25px&#34;</span>; <br /></span>
                  <span className="tabbedjs"> x.style.color = <span className="jsfunval">&#34;red&#34;</span>; <br />
                  </span>
                  {CBrC} <br />
                  <br />
                  <span className="jsvh">const</span><span> d =</span> <span className="jsvh">new</span> <span>Date();</span> <br />
                  <span><span className="jsvh">let</span> x = document.getElementById(<span className="jsfunval">&#34;datesample&#34;</span>).innerHTML = d;</span> <br />
                  {BrO}/script{BrC}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.comingsoon}>
          <div className={styles.cmshead}>
            <h1>Coming Soon...</h1>
          </div>
          <div className={styles.preview_cont}>
            <div className={styles.preview}>
              <h1>PHP</h1>
              <p>A web server programming language</p>
            </div>
            <div className={styles.preview}>
              <h1>SQL</h1>
              <p>A language for accessing databases</p>
            </div>
            <div className={styles.preview}>
              <h1>Go</h1>
              <p>A version control system to keep track of code changes</p>
            </div>
            <div className={styles.preview}>
              <h1>Git</h1>
              <p>A popular programming language by Google</p>
            </div>
          </div>
        </div>
      </div>























    </>
  )
}
