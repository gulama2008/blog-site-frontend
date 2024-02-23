import { ArticleItem, TagItem } from "../context/BlogContextProvider";

export const url = "http://localhost:8080";
 
export interface UpdateTags {
  tags: TagItem[];
}

export interface CreateArticle { 
  title: string,
  content: string,
  publishDate:string
}
export interface UpdateArticle {
  title: string;
  content:string
}
export class ArticleService {
  public static async get(): Promise<ArticleItem[]> {
    const response = await fetch(`${url}/articles`);
    return await response.json();
  }

  public static async getById(id: number): Promise<ArticleItem> {
    const response = await fetch(`${url}/articles/${id}`);
    if (!response.ok) {
      throw new Error(`Could not find article with id ${id}`);
    }
    return await response.json();
  }

  public static async createArticle(data: CreateArticle): Promise<ArticleItem> {
    const response = await fetch(`${url}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Could not create article");
    }
    return response.json();
  }

  public static async updateArticleById(id: number, data: UpdateArticle) {
    const response = await fetch(`${url}/articles/${id}`, {
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

  public static async getAllTagsByArticleId(id: number): Promise<TagItem[]> {
    const response = await fetch(`${url}/articles/${id}/tags`);
    if (!response.ok) {
      throw new Error(`Could not find article with id ${id}`);
    }
    return await response.json();
  }

  public static async updateTagsByArticleId(id: number, data: UpdateTags) {
    const response = await fetch(`${url}/articles/${id}/tags`, {
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

  public static async getArticlesGroupByDate(): Promise<any> {
    const response = await fetch(`${url}/articles/date`);
    return await response.json();
  }
}