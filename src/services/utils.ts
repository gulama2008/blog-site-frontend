export class Utils { 
    public static changeDateFormat(date:string):string { 
        const arr = date.split("-");
        return `${arr[2]}/${arr[1]}/${arr[0]}`;
    }
}