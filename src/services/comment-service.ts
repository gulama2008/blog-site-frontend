import { ArticleItem, CommentItem, UserItem } from "../context/BlogContextProvider";
import { url } from "./article-service";
export interface UpdateComment{
    content?: string,
    blocked?:boolean
}
export class CommentService {
  public static async get(): Promise<CommentItem[]> {
    const response = await fetch(`${url}/comments`);
    return await response.json();
  }

  public static async getById(id: number): Promise<CommentItem> {
    const response = await fetch(`${url}/comments/${id}`);
    if (!response.ok) {
      throw new Error(`Could not find tag with id ${id}`);
    }
    return await response.json();
  }

  public static async getArticleByCommentId(id: number): Promise<ArticleItem> {
    const response = await fetch(`${url}/comments/${id}/article`);
    if (!response.ok) {
      throw new Error(`Cound not find article with comment id ${id}`);
    }
    return await response.json();
  }

  public static async getUserByCommentId(id: number): Promise<UserItem> {
    const response = await fetch(`${url}/comments/${id}/user`);
    if (!response.ok) {
      throw new Error(`Cound not find user with comment id ${id}`);
    }
    return await response.json();
  }

  public static async updateCommentById(id: number, data: UpdateComment) {
    const response = await fetch(`${url}/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Could not update");
    }
  }
}
