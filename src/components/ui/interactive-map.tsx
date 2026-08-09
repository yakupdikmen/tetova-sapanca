"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { ExternalLink, Navigation, Star, Sparkles, MapPin } from "lucide-react";
import { DestinationItem, RESORT_BASE_LOCATION } from "@/constants/destinations";

export interface AdvancedMapProps {
  destinations: DestinationItem[];
  activeSpotId: string;
  onSelectSpot: (id: string) => void;
  className?: string;
}

// Custom Leaflet DivIcon for Tetova Sapanca Bungalov Resort Center
const createResortMarkerIcon = () => {
  return L.divIcon({
    className: "custom-leaflet-resort-marker",
    html: `
      <div class="relative flex flex-col items-center group cursor-pointer">
        <span class="absolute w-12 h-12 bg-amber-500/40 rounded-full animate-ping"></span>
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.9)] border-2 border-white p-1 overflow-hidden">
          <img src="/tetova_gold.svg" class="w-full h-full object-contain" alt="Tetova Sapanca Icon" />
        </div>
        <span class="mt-1 px-2.5 py-0.5 rounded-full bg-stone-900/95 border border-amber-400/50 text-amber-300 text-[10px] font-extrabold tracking-wider uppercase shadow-xl whitespace-nowrap">
          TETOVA SAPANCA BUNGALOV
        </span>
      </div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 25],
    popupAnchor: [0, -25],
  });
};

// Custom Leaflet DivIcon for Nearby POIs
const createPoiMarkerIcon = (spotName: string, isSelected: boolean) => {
  const bgClass = isSelected
    ? "bg-amber-600 border-white text-white scale-125 shadow-[0_0_20px_rgba(245,158,11,0.9)]"
    : "bg-stone-900 border-amber-500 text-amber-400";

  return L.divIcon({
    className: "custom-leaflet-poi-marker",
    html: `
      <div class="relative flex flex-col items-center group cursor-pointer transition-all duration-300">
        ${isSelected ? '<span class="absolute w-9 h-9 bg-amber-500/50 rounded-full animate-ping"></span>' : ""}
        <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 shadow-xl ${bgClass}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#1c1917"/></svg>
        </div>
        <span class="mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap shadow-md ${
          isSelected
            ? "bg-amber-600 text-white border border-white"
            : "bg-stone-950/90 text-stone-100 border border-white/10"
        }">
          ${spotName}
        </span>
      </div>
    `,
    iconSize: [32, 40],
    iconAnchor: [16, 20],
    popupAnchor: [0, -20],
  });
};

// Recenter Map Component helper
function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 14, {
        duration: 1.2,
      });
    }
  }, [lat, lng, map]);
  return null;
}

export const AdvancedMap: React.FC<AdvancedMapProps> = ({
  destinations,
  activeSpotId,
  onSelectSpot,
  className = "",
}) => {
  const activeSpot = destinations.find((d) => d.id === activeSpotId) || destinations[0];

  return (
    <div className={`relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 dark:border-white/10 ${className}`}>
      <MapContainer
        center={[RESORT_BASE_LOCATION.lat, RESORT_BASE_LOCATION.lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        {/* Dynamic Recenter Camera Animation */}
        {activeSpot && <RecenterMap lat={activeSpot.lat} lng={activeSpot.lng} />}

        {/* High quality OpenStreetMap / CartoDB Dark/Light Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* 1. Primary Central Resort Marker: Tetova Sapanca Bungalov */}
        <Marker
          position={[RESORT_BASE_LOCATION.lat, RESORT_BASE_LOCATION.lng]}
          icon={createResortMarkerIcon()}
        >
          <Popup className="custom-leaflet-popup">
            <div className="p-3 max-w-xs text-stone-900">
              <div className="flex items-center gap-1 text-amber-600 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>TESİSİMİZ</span>
              </div>
              <h3 className="text-sm font-black text-stone-900 mb-1">
                {RESORT_BASE_LOCATION.name}
              </h3>
              <p className="text-xs text-stone-600 mb-3">
                Kırkpınar Soğuksu Mah. Sapanca / Sakarya
              </p>
              <a
                href={RESORT_BASE_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold text-xs hover:bg-amber-500 transition-colors shadow-md"
              >
                <span>Google Maps'te İncele</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Popup>
        </Marker>

        {/* 2. Destination Markers for Nearby POIs */}
        {destinations.map((spot) => {
          const isSelected = spot.id === activeSpotId;

          return (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={createPoiMarkerIcon(spot.name, isSelected)}
              eventHandlers={{
                click: () => onSelectSpot(spot.id),
              }}
            >
              <Popup className="custom-leaflet-popup">
                <div className="p-2.5 max-w-xs flex gap-3 items-center text-stone-900">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-14 h-14 rounded-xl object-cover border flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                      {spot.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-stone-900 truncate">
                      {spot.name}
                    </h4>
                    <span className="text-[11px] text-stone-600 flex items-center gap-1 mt-0.5 font-medium">
                      <Navigation className="w-3 h-3 text-amber-600" />
                      {spot.distance}
                    </span>
                    <a
                      href={spot.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 hover:text-amber-700 mt-1"
                    >
                      <span>Yol Tarifi Al</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default AdvancedMap;
