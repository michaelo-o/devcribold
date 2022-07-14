import styles from './Login.module.css'
import { useState } from 'react';
import Head from 'next/head'
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <>
            <Head>
                <title>Login | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <form onSubmit={handleSubmit} className={styles['login-form']}>
                <h2>login</h2>
                <label>
                    <span>email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete
                    />
                </label>
                <label>
                    <span>password:</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete
                    />
                </label>
                {!isPending && <button className="btn">Login</button>}
                {isPending && <button className="btn" disabled>loading</button>}
                {error && <p>{error}</p>}
            </form>
        </>
    );
}

export default Login;