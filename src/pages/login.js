import axios from "axios"
import { useRouter } from 'next/router';

// const handleLogin = async (event) => {
//     // event.preventDefault();
//     // console.log('event - ', event.target)

//     const response = await axios.post('/api/login', { email: event.target.email.value, password: event.target.password.value }, {
//     //   method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     //   body: { email: event.target.email.value, password: event.target.password.value },
//     })
//     console.log('response from page : ', response)

//     const {
//         message, data = {}
//     } = response.data;

//     if (message === 'Authorized') {
//         const { id, } = data;
//         localStorage.setItem('userId', id)
//         localStorage.setItem('userName', userName)
//         localStorage.setItem('userId', id)

//     }
//     else {
//         // alert('Invalid credentials');
//     }
//     }

export default function Login() {
    // const router = useRouter();
    // const handleLogin = async (event) => {
    //     // event.preventDefault();
    //     // console.log('event - ', event.target)
    
    //     const response = await axios.post('/api/login', { email: event.target.email.value, password: event.target.password.value }, {
    //     //   method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     //   body: { email: event.target.email.value, password: event.target.password.value },
    //     })
    //     console.log('response from page : ', response)
    
    //     const {
    //         message, data = {}
    //     } = response.data;
    
    //     if (message === 'Authorized') {
    //         const { id, userName, token } = data;
    //         localStorage.setItem('userId', id)
    //         localStorage.setItem('userName', userName)
    //         localStorage.setItem('token', token)
    //         router.push('/blogs')
    //     }
    //     else {
    //         router.push('/login')
    //         // alert('Invalid credentials');
    //     }
    //     }
    return (
        <>
            <main >
                <form 
                // onSubmit={handleLogin}
                method="POST"
                action="/api/login"
                >
                    <h1 >Please sign in</h1>
                    <div>
                        <label htmlFor="floatingInput">Email address: </label>
                        <input type="email" id="email" name="email" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label htmlFor="floatingPassword">Password: </label>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </main>
        </>
    )
}

