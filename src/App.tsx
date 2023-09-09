import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
import Forecast from "./components/Forecast";

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <main className="h-full flex overflow-x-scroll justify-center   bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 w-full">
      {forecast ? (
        <Forecast
          data={forecast}
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
