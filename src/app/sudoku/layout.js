import styles from "./layout.module.css"
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

const Layout = ({children}) => {
    return (
        <div className={`${styles.layout} ${workSans.className}`}>
            {children}
        </div>
    );
}
 
export default Layout;