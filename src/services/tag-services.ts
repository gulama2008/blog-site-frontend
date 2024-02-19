import { ArticleItem, TagItem } from "../context/BlogContextProvider";
import { url } from "./article-service";

export class TagService {
  public static async get(): Promise<TagItem[]> {
    const response = await fetch(`${url}/tags`);
    return await response.json();
  }

  public static async getById(id: number): Promise<TagItem> {
    const response = await fetch(`${url}/tags/${id}`);
    if (!response.ok) {
      throw new Error(`Could not find tag with id ${id}`);
    }
    return await response.json();
  }

  public static async getAllArticlesByTagId(id: number): Promise<ArticleItem[]> {
    const response = await fetch(`${url}/tags/${id}/articles`);
    if (!response.ok) {
      throw new Error(`Cound not find tag with tag id ${id}`);
    }
    return await response.json();
  }
}