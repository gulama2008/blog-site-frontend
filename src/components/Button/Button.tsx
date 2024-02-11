import styles from "./Button.module.scss"
export interface ButtonProps{ 
    content: string;
}
const Button = ({content}:ButtonProps) => {
  return (
    <button className={styles.container}>{content}</button>
  )
}

export default Button