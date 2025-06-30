import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_BG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img className="h-screen w-full object-cover  " src={LOGIN_BG} />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
