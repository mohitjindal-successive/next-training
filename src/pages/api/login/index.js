import axios from "axios";
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

export default async function handler(req, res) {
  const adapter = new JSONFile('/home/mohit.jindal/next-training/db.json')
  const db = new Low(adapter)

  // Read data from JSON file, this will set db.data content
  await db.read()

  const { users = [] } = db.data;

        const { email, password } = req.body;
    console.log('req  ', { email, password })


  if (req.method === 'POST') {
    const response = await axios.get(`http://localhost:6000/users?email=${email}&password=${password}`);
    // console.log('response from get api ', response.data)
    if (response.data.length) return res.status(200).redirect('/blogs');
    return res.status(200).redirect('/login')
  }
  // if (req.method === 'POST') {
    //   const { email, password } = req.body;
  //   const response = await axios.post('http://localhost:7000/api/auth/login', { email, password }, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log('response ', response.data)
  //   // return response.data;
  //   if (response?.data?.message === 'Authorized') return res.status(200).redirect('/blogs');
  //   return res.status(200).redirect('/login');
  // }
  res.status(200).json({ name: 'John Doe' })
}
