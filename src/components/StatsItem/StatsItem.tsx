import { Children } from "react";

export interface StatsItemProps { 
    content: string;
    data: number;
    children:any
}

const StatsItem = ({content,data,children}:StatsItemProps) => {
  return (
      <div>
          {children}
    </div>
  )
}

export default StatsItem