import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import Head from 'next/head'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <>
            <Head>
                <title>Sign Up | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <form onSubmit={handleSubmit} className={styles['signup-form']}>
                <h2>sign up</h2>
                <label>
                    <span>email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>password:</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>display name:</span>
                    <input
                        type="text"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                {!isPending && <button className="btn">sign up</button>}
                {isPending && <button className="btn" disabled>loading</button>}
                {error && <p>{error}</p>}
            </form>

        </>
    );
}

export default Signup;