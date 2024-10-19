import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlagsAdd }) => {
  // console.log(handleVisitedFlagsAdd);
  const { name, flags, area, population, cca3 } = country;
  // console.log(country);

  const [visited, setVisited] = useState(false);
  const HandleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "bg-black" : "non - visited"}`}>
      <h2 style={{ color: visited ? "red" : "blue" }}>Name: {name.common}</h2>

      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedFlagsAdd(country.flags.png)}>
        Add flag
      </button>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <button onClick={HandleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "i have visited country" : "i want to visit"}
    </div>
  );
};

export default Country;
