const ExplorePage = () => {
  return (
    <div className="px-4">
        <div className="bg-glass max-w-2xl mx-auto rounded-md p-3">
          <h1 className="text-x1 font-bold text-center"> Explore Popular Respositories</h1>
            <div className="flex flex-wrap gap-2 my-2 justify-center">
              <img src="/javascript.svg" alt="JavaScript Logo" className="h-11 sm:h-28 cursor-pointer" />
              <img src="/python.svg" alt="Python Logo" className="h-11 sm:h-28 cursor-pointer" />
              <img src="/ruby.svg" alt="Ruby Logo" className="h-11 sm:h-28 cursor-pointer" />
              <img src="/c++.svg" alt="c++ Logo" className="h-11 sm:h-28 cursor-pointer" />
              <img src="/java.svg" alt="java Logo" className="h-11 sm:h-28 cursor-pointer" />
            </div>
        </div>

    </div>
  )
}

export default ExplorePage