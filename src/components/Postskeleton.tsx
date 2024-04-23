export const PostSkeleton = () => {
  return (
    <div className="grid justify-center mt-4">
      <div className="w-screen max-w-lg">
        <div className="border-b  p-4   divide-gray-200 rounded  animate-pulse  md:p-6">
          <div className="flex items-center  ">
            <div className="w-full">
              <div className="h-4 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
              <div className="w-full h-4 my-2 bg-gray-200 rounded-full "></div>
              <div className="w-full h-4 my-2 bg-gray-200 rounded-full "></div>
              <div className="w-full h-4 my-2 bg-gray-200 rounded-full "></div>
              <div className="h-3 bg-gray-200 rounded-full mt-2  w-24 mb-2.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
