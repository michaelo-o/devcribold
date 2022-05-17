import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {


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
          <div className="innerlearnhtml">
            <h1>Learn HTML</h1>
            <h3>The building blocks that make up the bodies of all Web Pages</h3>
            <h4>Learn HTML</h4>
            <h4>HTML References</h4>
          </div>
          <div className="example">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nam autem, non deserunt iure harum tempore natus veniam quos pariatur? Unde minima officia officiis sapiente expedita optio quasi incidunt corrupti.
          </div>
        </div>
        <div className="gradient2">
          <p> </p>
        </div>
        <div className="learncss">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum labore voluptates dolorem fuga, illum adipisci est! Quasi deleniti qui ipsam inventore, animi recusandae eum quia, iusto expedita ratione, reiciendis ab.
        </div>
        <div className="learnjavascript">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet vitae amet, nulla dolore similique quod. Temporibus quaerat laborum nemo adipisci ipsa! Pariatur in corporis quas nihil debitis voluptates dolores!
        </div>




















      </div>























    </>
  )
}
