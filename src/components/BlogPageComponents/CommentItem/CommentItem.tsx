import styles from './CommentItem.module.scss'
import avatar from "../../../assets/avatar.png"
import { CommentItem } from '../../../context/BlogContextProvider'

export interface CommentItemProps { 
    comment:CommentItem
}
const CommentItem = ({comment}:CommentItemProps) => {
  return (
      <div>
          <div><img src={avatar} alt="" /></div>
          <div>
              <div>
                  <div>{ }</div>
              </div>
              <div></div>
          </div>
    </div>
  )
}

export default CommentItem