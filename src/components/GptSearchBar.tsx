import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store: RootState) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="m-4 p-4 col-span-9"
        />
        <button className="bg-red-700 rounded-lg text-white col-span-3 m-4 py-2 px-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
