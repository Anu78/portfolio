import styles from "./loading.module.css"


const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.progressBar}></div>
        </div>
    );
}
 
export default Loading;