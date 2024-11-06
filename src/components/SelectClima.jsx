import React from "react";
import { IcoFewClouds } from "./IcoFewClouds";
import { IcoClearSky } from "./IcoClearSky";
import { IcoScatteredClouds } from "./IcoScatteredClouds";
import { IcoBrokenClouds } from "./IcoBrokenClouds";
import { IcoShowerRain } from "./IcoShowerRain";
import { IcoRain } from "./IcoRain";
import { IcoThunderStorm } from "./IcoThunderStorm";
import { IcoSnow } from "./IcoSnow";
import { IcoMist } from "./IcoMist";
import { IcoClearSkyN } from "./IcoClearSkyN";
import { IcoFewCloudsN } from "./IcoFewCloudsN";
import { IcoRainN } from "./IcoRainN";
export const SelectClima = ({ id }) => {
  const arrayImagenes = [
    { id: "01d", icono: <IcoClearSky></IcoClearSky> },
    { id: "02d", icono: <IcoFewClouds></IcoFewClouds> },
    { id: "03d", icono: <IcoScatteredClouds></IcoScatteredClouds> },
    { id: "04d", icono: <IcoBrokenClouds></IcoBrokenClouds> },
    { id: "09d", icono: <IcoShowerRain></IcoShowerRain> },
    { id: "10d", icono: <IcoRain></IcoRain> },
    { id: "11d", icono: <IcoThunderStorm></IcoThunderStorm> },
    { id: "13d", icono: <IcoSnow></IcoSnow> },
    { id: "50d", icono: <IcoMist></IcoMist> },
    { id: "01n", icono: <IcoClearSkyN></IcoClearSkyN> },
    { id: "02n", icono: <IcoFewCloudsN></IcoFewCloudsN> },
    { id: "03n", icono: <IcoScatteredClouds></IcoScatteredClouds> },
    { id: "04n", icono: <IcoBrokenClouds></IcoBrokenClouds> },
    { id: "09n", icono: <IcoShowerRain></IcoShowerRain> },
    { id: "10n", icono: <IcoRainN></IcoRainN> },
    { id: "11n", icono: <IcoThunderStorm></IcoThunderStorm> },
    { id: "13n", icono: <IcoSnow></IcoSnow> },
    { id: "50n", icono: <IcoMist></IcoMist> },
  ];
  const icono = arrayImagenes.filter((element) => id === element.id);
  return (
    <>
      {icono.map((element) => (
        <div key={element.id}>{element.icono}</div>
      ))}
    </>
  );
};
