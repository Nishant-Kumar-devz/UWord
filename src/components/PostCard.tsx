import { Link } from "react-router-dom"

interface PostCardProps {
    id:string,
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
}
export const PostCard = ({id,authorName,title,content,publishedDate}:PostCardProps) =>{
    return <Link to={`/post/${id}`}>
     <div className="border-b p-4 max-w-lg cursor-pointer">
        <div className="flex pb-2">
            <div className="flex justify-center flex-col p-1">
                <Avatar name={authorName}/> 
            </div>
           <div className="font-extralight p-1">
                {authorName} 
            </div>
            <div className="p-1">
                &#x2022; 
            </div>
            <div className="p-1 text-slate-500 font-thin">
                {publishedDate}
            </div>
        </div>

        <div className="font-bold text-xl pb-2">
            {title}
        </div>

        <div className="font-light text-md">
            {content.slice(0,100)+`${content.length>=100?"...":null}`}
        </div>

        <div className="text-slate-500 font-thin pt-4">
            {`${Math.ceil(content.length /100)} minutes read`}
        </div>
    </div>
    </Link>
}

export function Avatar ({name}:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300 text-xs">{name[0]}</span>
        </div>   
}