import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { LatLngExpression } from "leaflet";

export type MapProps = {
  width: number;
  height: number;
  route: LatLngExpression[];
  color: string;
};

export default function ({ width, height, route, color }: MapProps) {
  // https://www.geoplaner.com/
  const position: LatLngExpression = [34.43024, -119.72882];
  const pathOptions = { color: color };

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
      />
      <Polyline
        pathOptions={pathOptions}
        positions={route}
        smoothFactor={3.0}
      />
    </MapContainer>
  );
}
