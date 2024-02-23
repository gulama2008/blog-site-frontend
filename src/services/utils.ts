import {
  ArticleItem,
  BlogItem,
  CommentItem,
  TagItem,
  UserItem,
} from "../context/BlogContextProvider";
import { TagService } from "./tag-services";

export class Utils {
  public static changeDateFormat(date: string): string {
    const arr = date.split("-");
    return `${arr[2]}/${arr[1]}/${arr[0]}`;
  }

  // public static getBlogItemByComment(
  //   comment: CommentItem,
  //   data: BlogItem[]
  // ): BlogItem {
  //   const blogItem = data.find((item: BlogItem) => {
  //     return comment.articleId == item.id;
  //   });
  //   if (blogItem) {
  //     return blogItem;
  //   } else {
  //     throw new Error("No such id exist");
  //   }
  // }

  public static countViews(data: ArticleItem[]): number {
    const viewCount = data.reduce((a: number, b: ArticleItem) => {
      return a + b.views;
    }, 0);
    return viewCount;
  }

  public static async getArticlesByTagId(tags: TagItem[], arr: any[]) {
    tags.map((tag: TagItem) => {
      TagService.getAllArticlesByTagId(tag.id)
        .then((data) => {
          console.log(data);
          arr.push([tag.name, data.length]);
        })
        .catch((e) => console.error(e));
    });
  }

  public static countTags(tags: TagItem[]) {
    let resultArr: any = [];
    resultArr.push(["tagname", "tagcount"]);
    tags.map((tag: TagItem) => {
      console.log([tag.name, tag.articles?.length]);

      resultArr.push([tag.name, tag.articles?.length]);
    });
    // this.getArticlesByTagId(tags, resultArr)
    //   .then(() => {
    //     console.log(resultArr);

    //     return resultArr;
    //   })
    //   .catch((e) => console.error(e));
    // tags.map((tag: TagItem) => {
    //   TagService.getAllArticlesByTagId(tag.id)
    //     .then((data) => {
    //       console.log(data);
    //       resultArr.push([tag.name, data.length]);
    //     })
    //     .catch((e) => console.error(e));
    // });
    console.log(resultArr);
    return resultArr;
  }

  public static getUserById(id: number, users: UserItem[]) {
    return users.find((user: UserItem) => user.id == id);
  }

  public static getTagsOthers(
    tags: TagItem[],
    tagsOfArticle: TagItem[]
  ): TagItem[] {
    console.log(tags);
    console.log(tagsOfArticle);

    const tagsOthers = tags.filter((tag: TagItem) => {
      return (
        tagsOfArticle.map((tag1: TagItem) => tag1.id).indexOf(tag.id) == -1
      );
    });
    return tagsOthers;
  }

  public static getFormattedCurrentDate() {
    let formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const localDate = `${year}-${month}-${day}`;
      return localDate;
    };
    const today = new Date();
    return formatDate(today);
  }

  public static getFormattedGroupedArticles(data: []) {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const result = data.map((e: any) => {
      const formatted = [];
      const dateArr = e[1].split("-");
      const month = monthNames[parseInt(dateArr[1]) - 1];
      const newDate = `${month} ${dateArr[0]}`;
      formatted.push(newDate);
      formatted.push(e[0]);
      return formatted;
    });
    console.log(result);

    return result;
  }

  public static convertDateToString(data: Date) {
    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, "0");
    const day = String(data.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  public static getFirstDayOfMonth(date: string) {
    const fullDate = `${date}-01`;
    const firstDay = new Date(fullDate);
    const firstDayStr = this.convertDateToString(firstDay);
    return firstDayStr;
  }

  public static getLastDayOfMonth(date: string) {
    const fullDate = `${date}-01`;
    const d = new Date(fullDate);
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    const lastDayStr = this.convertDateToString(lastDay);
    return lastDayStr;
  }

  public static sortArticlesByPublishDate(articles:ArticleItem[]):ArticleItem[] { 
    articles.sort((a: ArticleItem, b: ArticleItem) => { 
      const dateA:any = new Date(a.publishDate);
      const dateB:any = new Date(b.publishDate);
      return dateB - dateA;
    });
    return articles;
  }
}
