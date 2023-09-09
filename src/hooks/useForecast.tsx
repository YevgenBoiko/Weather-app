import { ChangeEvent, useEffect, useState } from "react";
import { optionType, forecastType } from "../types";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  //   const [loc, setLoc] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      //   setLoc(null);
    }

    function success(position: { coords: { latitude: any; longitude: any } }) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // setLoc({ lat: latitude, lon: longitude });
      getForecast({ lat: latitude, lon: longitude });
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((e) => console.log(e));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") return;

    getSearchOptions(value);
  };

  const getForecast = (city: optionType | { lat: number; lon: number }) => {
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    // )
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(forecastData);
      })
      .catch((e) => console.log(e));
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return { term, options, forecast, onInputChange, onOptionSelect, onSubmit };
};

export default useForecast;
