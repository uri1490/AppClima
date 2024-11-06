import React from "react";

export const getClimaService = async () => {
  const getClima = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?appid=f0bcabf65f5a93ccf903f7fd7e82f56d&lang=es&q=España"
  );
  const data = await getClima.json();
  return data;
};
