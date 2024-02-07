import { createContext } from "react"

export const BlogContext = createContext<any>(null);

const BlogContextProvider = ({children}:any) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
}

export default BlogContextProvider