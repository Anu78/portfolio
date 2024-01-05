import styles from "./page.module.css";
import PostContainer from "@/components/blog/PostContainer";

const BlogHome = () => {
  const blogPost = {
    todo: false,
    title: "a test blog post",
    summary: "a testing blog post for a postcontainer",
    date: "4 Jan 2023",
    id: 1,
  };

  const todoPost = {
    todo: true,
    title: "my todo list",
    summary: "things i want to work on in the future",
    date: "4 Jan 2023",
    time: "17:59",
    id: 2,
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.blogtitle}>anu's blog</h1>
        <p className={styles.shortdesc}>
          a short description (or a long essay) about the projects i'm working
          on, depending on how interesting they are.
          <br />
          <br /> check out my current todo list!
        </p>
        <PostContainer post={todoPost} />
      </div>
      <div className={styles.right}>
        <div className={styles.center}>
          <PostContainer post={blogPost} />
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
