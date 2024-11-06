import React from "react";
import { getClimaService } from "../services/getClimaService";

export const useFetchGetClima = async (estado) => {
  console.log("pais" + estado);
  try {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?appid=f0bcabf65f5a93ccf903f7fd7e82f56d&lang=es&q=" +
      estado +
      "&units=metric";
    console.log(url);
    const response = await fetch(url);

    const data = await response.json();
    if (response.status != 200) throw response.status;
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
