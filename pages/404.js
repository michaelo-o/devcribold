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

        </>
    );
}

export default NotFound;