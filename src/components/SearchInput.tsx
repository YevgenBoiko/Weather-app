import { ChangeEvent } from "react";
import { optionType } from "../types";

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

function SearchInput({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element {
  return (
    <>
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md rounded-none border-2 border-black border-opacity-20 bg-transparent"
        onChange={onInputChange}
      />
      <ul className="absolute top-9 bg-white bg-opacity-90 ml-1 rounded-b-md">
        {options.map((option: optionType, index: number) => (
          <li key={option.name + "-" + index}>
            <button
              className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
              onClick={() => onOptionSelect(option)}
            >
              {option.name},{option.country}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="rounded-r-md border-2 border-black border-opacity-20 hover:border-white hover:text-white text-black text-opacity-40   px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </>
  );
}

export default SearchInput;
