export default function PostBlog() {
    return (
        <>
            <h1 >Post Blog</h1>
            <form method='POST' action='/api/blogs'>
                <div>
                    <label>Title : </label>
                    <input type="String" id="title" name="title" required />
                </div>
                <br />
                <div>
                    <label>Description : </label>
                    <textarea id="description" name="description"
                        rows="5" cols="33" required />
                </div>
                <br />

                <button type="submit">Post</button>
            </form>
        </>
    )
}

