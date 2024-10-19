import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log("Add this to your visited country");
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlagsAdd = (flag) => {
    // console.log("flag adding");
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      {/* visited country */}
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3}> {country.name.common}</li>
          ))}
        </ol>
        <div>
          {visitedFlag.map((flag, idx) => (
            <img key={idx} className="w-20" src={flag} alt="" />
          ))}
        </div>
        {/* display countries */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlagsAdd={handleVisitedFlagsAdd}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
