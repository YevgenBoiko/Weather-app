import { ChangeEvent } from "react";
import { optionType } from "../types";
import SearchInput from "./SearchInput";

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="h-screen flex overflow-x-scroll justify-center md:p-20 bg-gradient-to-br from-blue-800   to-gray-400  w-full">
      <section className="items-center h-screen w-full  md:max-w-[500px] p-4 flex flex-col text-center justify-center md:px-10 lg:p-24 lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an
          option from dropdown
        </p>
        <div className="relative flex mt-10 md:mt-4">
          <SearchInput
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default Search;
