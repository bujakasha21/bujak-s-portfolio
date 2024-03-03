"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapInit = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      //map
      const { Map } = await loader.importLibrary("maps");

      //marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 43.822086334228516,
        lng: 18.371166229248047,
      };

      //options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      //map setup
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //pin marker
      const marker = new Marker({ map: map, position: position });
    };
    mapInit();
  }, []);
  return <div className="md:h-[450px] h-[250px]" ref={mapRef} />;
};

export default Map;
