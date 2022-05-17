import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            // router.go(1)
            router.push('/')
        }, 5000)
    }, [])

    return (
        <>
            <Head>
                <title>Not Found in the Crib</title>
            </Head>
            <div className="not-found">
                <h1>Ooops...</h1>
                <h2>Looks like this page does not exist in the crib :(</h2>
                <p>Going back to the <Link href="/"><a>Homepage</a></Link> in 5 seconds...</p>
            </div>
        </>
    );
}

export default NotFound;