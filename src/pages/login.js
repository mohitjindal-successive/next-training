export default function Login() {
    return (
        <>
            <main >
                <form>
                    <h1 >Please sign in</h1>
                    <div>
                        <label htmlFor="floatingInput">Email address: </label>
                        <input type="email" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label htmlFor="floatingPassword">Password: </label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </main>
        </>
    )
}

