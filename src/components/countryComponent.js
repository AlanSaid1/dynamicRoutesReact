import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CountryComponent = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCountryName(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      setCountryData(data);
      // Redirigir a la nueva ruta con el nombre del pais
      navigate(`/${countryName}`);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={countryName} onChange={handleInputChange} />
        <button type="submit">Buscar</button>
      </form>

      {countryData && (
        <div>
          <h2>Información del país:</h2>
          <p>Nombre: {countryData[0]?.name?.common}</p>
          {countryData[0]?.flags && (
            <img src={countryData[0]?.flags.png} alt="Bandera del país" />
          )}
        </div>
      )}
    </div>
  );
};

export default CountryComponent;
