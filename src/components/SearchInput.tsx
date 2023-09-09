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
        className="px-2 py-1 rounded-l-md border-2 border-white"
        onChange={onInputChange}
      />
      <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
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
        className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </>
  );
}

export default SearchInput;
