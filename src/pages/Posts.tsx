import { PostCard } from "../components/PostCard";
import { AppBar } from "../components/AppBar";
import { usePosts } from "../hooks";
import { PostSkeleton } from "../components/Postskeleton";

export const Posts = () => {
  const { loading, posts } = usePosts();

  if (loading) {
    return (
      <div>
        <AppBar />
        <div>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center ">
        <div>
          {posts.map((post) => (
            <PostCard
              id={post.id}
              authorName={post.author.name}
              title={post.title}
              content={post.content}
              publishedDate={"2nd April 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
