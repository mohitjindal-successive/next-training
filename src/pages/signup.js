export default function Signup() {
    return (
        <>
            <main>
                <form>
                    <h1 >Sign Up</h1>
                    <div>
                        <label>User Name : </label>
                        <input type="String" placeholder="username" />
                    </div>
                    <div>
                        <label>First Name : </label>
                        <input type="String" placeholder="firstname" />
                    </div>
                    <div>
                        <label>Last Name : </label>
                        <input type="String" placeholder="lastname" />
                    </div>
                    <div>
                        <label htmlFor="floatingInput">Email address: </label>
                        <input type="email" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label htmlFor="floatingPassword">Password: </label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit">SignUp</button>
                </form>
            </main>
        </>
    )
}

