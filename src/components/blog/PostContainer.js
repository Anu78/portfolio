import Link from "next/link";
import styles from "./postcontainer.module.css"
import { LuListTodo } from "react-icons/lu";

const PostContainer = ({post}) => {
    const {todo, title, summary, date, id} = post;

    return (
        <Link href={`/blog/${id}`} key={id} className={styles.container}>
            <div>
            <h3 className={styles.title}>{title} {todo ? <span className={styles.pinned}><LuListTodo size={24}/></span> : ""}</h3>
            <p className={styles.summary}>{summary}</p>
            </div>
            <div>
            <p className={styles.date}>{date}</p>
            </div>
        </Link>
    );
}
 
export default PostContainer;