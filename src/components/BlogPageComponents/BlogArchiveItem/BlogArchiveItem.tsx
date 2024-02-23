import styles from './BlogArchiveItem.module.scss'
export interface BlogArchiveItemProps { 
    data: any;
}
const BlogArchiveItem = ({data}:BlogArchiveItemProps) => {
  return (
      <div className={styles.container}>
          {data[0]} ({data[1]})
    </div>
  )
}

export default BlogArchiveItem