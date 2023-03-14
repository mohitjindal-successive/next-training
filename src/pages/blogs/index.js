export default function BlogList({ data }) {
    return (
        <>
                    <h1 >Blogs List</h1>
                    {data?.map((blog) => (
                <div  key={blog.blogId}>
                  {blog.title}
                </div>
              ))}
        </>
    )
}

export async function getStaticProps() {
//   const response = await axios.get(`${baseUrl}/blogs`);
  const response = {
    status: 200,
    data: [
        {
            blogId: 1,
        title: 'blog 1',
        description: 'blog 1 description'
      },
      {blogId: 2,
        title: 'blog 2',
        description: 'blog 2 description'
      },
      
    ]
  }

  const data = response?.data;
  return {
        props: { data }, // will be passed to the page component as props
        // revalidate: 10,
      };
}

