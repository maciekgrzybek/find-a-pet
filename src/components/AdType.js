import React from "react";
import AdTypeChoice  from "./AdTypeChoice";

const AdType = () => {
  return (
    <div className="ads-type grid-x">
        <AdTypeChoice label="Znaleziony" adType="found" path="/dodaj/znaleziony" />
        <AdTypeChoice label="Zgubiony"  adType="lost" path="/dodaj/zgubiony" />
        <AdTypeChoice label="Do adopcji" adType="adopt" path="/dodaj/do-adopcji" />
    </div>
  );
};

export default AdType;
