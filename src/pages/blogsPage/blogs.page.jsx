// components
import Header from "../../components/headerSection/header.component";
import Blogs from "../../components/blogsSection/blogs.component";

const BlogsPage = () => {
    return(
        <>
            <Header black />
            <Blogs selectCount={8} />
        </>
    )
}

export default BlogsPage;