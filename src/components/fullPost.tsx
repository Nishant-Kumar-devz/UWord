import { AppBar } from "./AppBar";
import { PostType } from "../hooks";
import { Avatar } from "./PostCard";

export const FullPost = ({ post }: { post: PostType }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12  px-10 w-full pt-12 max-w-screen-xl ">
          <div className="col-span-8 mr-5">
            <div className="text-5xl font-extrabold">{post.title}</div>
            <div className="text-slate-500 pt-2">Post on Decmeber 2024</div>
            <div className="pt-4">{post.content}</div>
          </div>
          <div className="col-span-4 ml-5 ">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex ">
              <div className="flex flex-col justify-center pr-4">
                <Avatar name={post.author.name}></Avatar>
              </div>
              <div>
                <div className="text-xl font-bold">{post.author.name}</div>
                <div className="pt-2 text-slate-500">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
