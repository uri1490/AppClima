import React, { useEffect, useState } from "react";
import { useFetchGetClima } from "../hooks/useFetchGetClima";
import { SelectClima } from "./SelectClima";
import { IcoRainN } from "./IcoRainN";

export const InputGetClima = () => {
  const [locacion, setLocacion] = useState("");
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(true);
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const clima = await useFetchGetClima("Mexico");
        setLoading(false);
        console.log("clima", clima);
        setLocacion(clima);
        setError(200);
      } catch (errores) {
        console.log("clima" + errores);
        setError(errores);
        setLoading(false);
      }
    };
    getData();
  }, []);
  const handleValue = (event) => {
    setValor(event.target.value);
  };
  const ObtenerClima = () => {
    const getData = async () => {
      try {
        const clima = await useFetchGetClima(valor);
        setLoading(false);
        console.log("clima", clima);
        setLocacion(clima);
        setError(200);
      } catch (errores) {
        console.log("clima" + errores);
        setError(errores);
        setLoading(false);
      }
    };
    getData();
  };
  if (loading) {
    return <h1>cargando..</h1>;
  } else {
    if (error !== 200) {
      return (
        <>
          <input
            type="text"
            placeholder="ubicación"
            value={valor}
            onChange={handleValue}
          ></input>
          <button onClick={() => ObtenerClima()}>Buscar</button>
          <span>Error al cargar{error}</span>
        </>
      );
    }

    return (
      <div
        className={` ${
          locacion.weather[0].icon.includes("d")
            ? "fondoGradianteD"
            : "fondoGradiante"
        }  h-[100vh] flex justify-center items-center`}
      >
        <div className="w-2/5 bg-white/25 flex flex-col gap-1 rounded-md">
          <div className="   grid grid-cols-5 grid-rows-3  rounded-md">
            <div className=" col-start-1 col-span-3 row-span-3 flex justify-center items-center ">
              <SelectClima id={locacion.weather[0].icon}></SelectClima>
            </div>
            <h1 className=" flex justify-center items-center col-start-4 md:text-2xl lg:text-3xl col-span-2 font-mono">
              {locacion.name}
            </h1>
            <h2 className="flex justify-center items-center col-start-4 lg:text-5xl sm:text-2xl md:text-4xl col-span-2 font-mono">
              {locacion.main.temp}&#176;
            </h2>
            <div className="flex justify-center items-center col-start-4  col-span-2 gap-1">
              <h1 className="font-thin">
                <b>Humedad</b>
              </h1>
              <h1 className="font-thin">
                <b>{locacion.main.humidity} %</b>
              </h1>
            </div>
            <div className="flex justify-center row-start-4 col-span-3">
              <h1 className="font-thin">
                <b>{locacion.weather[0].description}</b>
              </h1>
            </div>
          </div>
          <div className="flex gap-1 justify-center col-span-5 p-1">
            <input
              type="text"
              placeholder="ubicación"
              value={valor}
              onChange={handleValue}
              className="rounded-sm sm:w-9/12"
            ></input>
            <button
              className="bg-blue-700 rounded-sm p-1 text-white font-mono"
              onClick={() => ObtenerClima()}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    );
  }
};
