import { createContext, useState } from "react";

export const BlogContext = createContext<any>(null);

const BlogContextProvider = ({ children }: any) => {
  const [activeSideBarItemIndex, setActiveSideBarItemIndex] = useState<number>(0);
  return (
    <BlogContext.Provider value={{ activeSideBarItemIndex, setActiveSideBarItemIndex }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
