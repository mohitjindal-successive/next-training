import { useRouter } from 'next/router';

export default function BlogData() {
    const router = useRouter();
  const {blogId} = router.query;
    return (
        <>
                    <h1 >Blogs Details {blogId}</h1>
                    {/* {data?.map((blog) => (
                <div  key={blog.blogId}> */}
                  {/* {blog.title} */}
                {/* </div> */}
              {/* ))} */}
        </>
    )
}

// export async function getStaticProps() {
// //   const response = await axios.get(`${baseUrl}/blog-post`);
//   const response = {
//     status: 200,
//     data: [
//         {
//             blogId: 1,
//         title: 'blog 1',
//         description: 'blog 1 description'
//       },
//       {blogId: 2,
//         title: 'blog 2',
//         description: 'blog 2 description'
//       },
      
//     ]
//   }

//   const data = response?.data;
//   return {
//         props: { data }, // will be passed to the page component as props
//         // revalidate: 10,
//       };
// }

