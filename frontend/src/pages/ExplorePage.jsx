import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("ruby");
  
  const explorRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch(`/api/explore/repos/${language}`)
      const {repos} = await res.json();
      setRepos(repos);
      setSelectedLanguage(language);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    explorRepos('ruby')
  }, [])

  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-3">
        <h1 className="text-x1 font-bold text-center">
          {" "}
          Explore Popular Respositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <img
            src="/javascript.svg"
            alt="JavaScript Logo"
            className="h-11 sm:h-28 cursor-pointer"
            onClick={() => explorRepos("javascript")}
          />
          <img
            src="/python.svg"
            alt="Python Logo"
            className="h-11 sm:h-28 cursor-pointer"
            onClick={() => explorRepos("python")}
          />
          <img
            src="/ruby.svg"
            alt="Ruby Logo"
            className="h-11 sm:h-28 cursor-pointer"
            onClick={() => explorRepos("ruby")}
          />
          <img
            src="/c++.svg"
            alt="c++ Logo"
            className="h-11 sm:h-28 cursor-pointer"
            onClick={() => explorRepos("c++")}
          />
          <img
            src="/java.svg"
            alt="java Logo"
            className="h-11 sm:h-28 cursor-pointer"
            onClick={() => explorRepos("java")}
          />
        </div>

        {repos.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {selectedLanguage.toUpperCase()}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && (
          <Repos repos={repos} alwaysFullWidth />
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default ExplorePage;
