export default function Shimmer() {
  return (
<div className="bg-orange-200 min-h-screen">
  <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-72 bg-white rounded-md"></div>
          <div className="h-4 w-32 bg-white rounded-md mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div key={index} className="animate-pulse w-full">

                {/* Image */}
                <div className="w-full h-52 sm:h-48 rounded-2xl bg-white"></div>

                {/* Text */}
                <div className="mt-4 space-y-3">
                  <div className="h-5 bg-white rounded-md w-3/4"></div>
                  <div className="h-4 bg-white rounded-md w-1/2"></div>
                  <div className="h-4 bg-white rounded-md w-5/6"></div>
                  <div className="h-4 bg-white rounded-md w-2/3"></div>
                </div>

              </div>
            ))}
        </div>

      </div>
    </div>
    </div>
  );
}