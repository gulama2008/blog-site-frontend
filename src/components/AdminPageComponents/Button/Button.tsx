import styles from "./Button.module.scss"
export interface ButtonProps{ 
  content: string;
  onClick: (e?:any) => unknown,
  backgroundColor?: string,
  color?:string
}
const Button = ({
  content,
  onClick,
  color = "white",
  backgroundColor = "#5486e5",
}: ButtonProps) => {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {content}
    </button>
  );
};

export default Button