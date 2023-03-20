import axios from "axios";
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

export default async function handler(req, res) {
    const adapter = new JSONFile('/home/mohit.jindal/next-training/db.json')
    const db = new Low(adapter)

    // Read data from JSON file, this will set db.data content
    await db.read()

    const { users = [] } = db.data;
if (req.method === 'POST') {
        // console.log('body : ', JSON.stringify(req.body, null, 4));
        const blog = req.body;
        const { title, description } = blog;
        const newBlog = {
            blogId: Date.now(),
            title,
            description,
            comments: [],
            owner: 'abcd'
        }
        blogs.push(newBlog)
        await db.write()
        res.status(201).redirect('/blogs');
    }
}