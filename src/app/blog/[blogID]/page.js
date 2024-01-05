import styles from "./page.module.css"

const BlogPost = async ({params}) => {
    const { blogID } = params;
    return (<div>
        {blogID}
    </div>);
}
 
export default BlogPost;