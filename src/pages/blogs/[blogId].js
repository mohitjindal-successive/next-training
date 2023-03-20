import { useRouter } from 'next/router';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => {
  return res.json()
} 
)
export default function BlogDetails() {
    const router = useRouter();

  const {blogId} = router.query;
  const { data, error, isLoading } = useSWR(`/api/blogs/${blogId}`, fetcher)
  // console.log('data -- ', data)

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
                    <h1 >Blogs Details</h1>
                    {data?.map((blog) => (
                 <div  key={blog.blogId}> 
                 
                  Title: {blog.title}
                  <br/>
                  Description: {blog.description}
                  <br/>
                  Comments: 
                  {blog?.comments?.map((comment, id) => 
                    <div key={id}>
                      From: {comment.by} <br/>
                      Comment: {comment.comment}
                      </div>
                  )}
                </div>
              ))}
        </>
    )
}
