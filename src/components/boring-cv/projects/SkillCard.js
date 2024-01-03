import styles from "./skillcard.module.css";

const SkillCard = ({ name }) => {
    function determineClass(name) {
        switch (name.toLowerCase()) {
            case "next.js/react":
                return styles.nextjs;
            case "javascript":
                return styles.javascript;
            case "python":
                return styles.python;
            case "rust":
                return styles.rust;
            case "c/c++":
                return styles.cCpp;
            case "java":
                return styles.java;
            case "aws":
                return styles.aws;
            default:
                return styles.default;
        }
    }

    return (
        <div className={`${styles.container} ${determineClass(name)}`}>{name}</div>
    );
}

export default SkillCard;
