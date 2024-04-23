import { usePost } from "../hooks";
import { useParams } from "react-router-dom";
import { FullPost } from "../components/fullPost";
import { AppBar } from "../components/AppBar";
import { Loading } from "../components/Loading";
export const Post = () => {
  const { id } = useParams();
  const { loading, post } = usePost({
    id: id || "",
  });
  if (loading) {
    return <div>
      <AppBar/>
      <div className="grid place-content-center h-screen">
      <Loading/>
      </div>
      </div>;
  }
  return (
    <div>
      <FullPost post={post} />
    </div>
  );
};
