import Link from "next/link";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => {
  return res.json()
} 
)
export default function BlogList() {
  // const accessToken = localStorage.getItem('token');    
  //   if(!accessToken) {
  //     router.push('/login')
  //   }
  const { data, error, isLoading } = useSWR('/api/blogs', fetcher)
  if (error) {
    return (
      <div>
        Error fetching blog list
      </div>
    )
  }
  else if (isLoading) {
    return (
      <div>
        Loading
      </div>
    )
  }
    return (
        <>
                    <h1 >Blogs List</h1>
                    {data?.map((blog) => (
                <div key={blog.blogId}>
                  <Link href={`/blogs/${blog.blogId}`}>
                  {blog.title}
                  </Link>
                </div>
              ))}
        </>
    )
}
