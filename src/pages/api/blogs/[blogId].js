import axios from "axios";
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

export default async function handler(req, res) {
    const adapter = new JSONFile('/home/mohit.jindal/next-training/db.json')
    const db = new Low(adapter)

    // Read data from JSON file, this will set db.data content
    await db.read()

    const { blogs = [] } = db.data;

    if (req.method === 'GET') {
        const { blogId } = req.query;
        const response = await axios.get(`http://localhost:6000/blogs?blogId=${blogId}`);
        // console.log('response from api ', response)
        return res.status(200).json(response.data)
      } 
    //   else if (req.method === 'POST') {
    //     const comment = req.body.comment
    //     const newComment = {
    //       id: Date.now(),
    //       text: comment
    //     }
    //     comments.push(newComment)
    //     res.status(201).json(newComment)
    //   }
    // res.status(200).json({ name: 'John Doe' })
  }