import { BlogItem, CommentItem } from "../context/BlogContextProvider";

export class Utils { 
    public static changeDateFormat(date:string):string { 
        const arr = date.split("-");
        return `${arr[2]}/${arr[1]}/${arr[0]}`;
    }

    public static getBlogItemByComment(comment:CommentItem,data:BlogItem[]):BlogItem {
        const blogItem = data.find((item:BlogItem) => { 
            return comment.articleId == item.id;
        })
        if (blogItem) {
            return blogItem;
        } else { 
            throw new Error("No such id exist")
        }
     }
}