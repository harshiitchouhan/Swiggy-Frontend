function RestaurantMenuShimmer() {
  return (
    <div>
      <div className="w-[80%] mx-auto mt-20 animate-pulse">
        {/* Logo + Info */}
        <div className="flex gap-5 items-center mb-6">
          <div className="w-28 h-28 rounded-2xl bg-gray-200 shrink-0"></div>

          <div className="flex-1">
            <div className="h-8 w-64 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 w-80 bg-gray-200 rounded mb-4"></div>

            <div className="flex items-center gap-3">
              <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Stats Box */}
        <div className="flex border border-gray-200 rounded-2xl mb-6 divide-x divide-gray-200">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-1 text-center py-4">
              <div className="h-5 w-20 bg-gray-200 rounded mx-auto mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 rounded mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="h-12 w-full bg-gray-200 rounded-2xl mb-6"></div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-10 w-32 bg-gray-200 rounded-xl"
            ></div>
          ))}
        </div>
      </div>

      {/* Menu Cards */}
      <div className="w-[80%] mx-auto animate-pulse">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border-b border-gray-200 py-6">
            <div className="h-6 w-56 bg-gray-200 rounded mb-5"></div>

            <div className="space-y-6">
              {[1, 2].map((food) => (
                <div key={food} className="flex justify-between gap-6">
                  <div className="flex-1">
                    <div className="h-5 w-48 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>

                  <div className="w-32 h-28 bg-gray-200 rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenuShimmer;