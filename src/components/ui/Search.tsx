import { memo } from "react";

type searchFunction = {
  searchFunction: (text: string) => void;
};

const Search = ({ searchFunction }: searchFunction) => {
  console.log("Search Rendered!");
  return (
    <>
      <input
        type="text"
        //   value={}
        placeholder="Search..."
        className="outline rounded-lg p-2 focus-visible:outline-amber-50"
        onChange={(e) => searchFunction(e.target.value)}
      />
    </>
  );
};

export default memo(Search);
