import styles from "./page.module.css"

const BlogPost = async ({params}) => {
    // const { blogID } = params;

    // const res = await fetch("https://raw.githubusercontent.com/Anu78/intro-to-ml-hw/main/README.md")

    // const markdown = await res.text()

    // return (<div className={styles.container}>
    //     <MDXRemote source={markdown} />
    // </div>);

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.wip}>
                    work in progress.
                </h1>
                <p className={styles.explain}>right now, i don't have a neat solution to write blogs, upload them somewhere, and have them show up here automatically. and besides, i don't have many interesting projects to show off. check back later!</p>
            </div>
        </div>
    )
}
 
export default BlogPost;