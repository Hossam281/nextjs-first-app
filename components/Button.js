import Link from "next/link"
import styles from "./Button.module.css"
const Button = ({path,children,onClick}) => {

if(onClick){
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  )
}
  return (
    <Link className={styles.btn} href={path}>{children}</Link>
  )
}

export default Button