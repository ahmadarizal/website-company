import React from "react";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
      <SelectsCard bg={maldives3} text={"Jamaica"} />
      <SelectsCard bg={maldives} text={"Antigua"} />
      <SelectsCard bg={maldives2} text={"Cozumel"} />
      <SelectsCard bg={borabora} text={"Bora Bora"} />
      <SelectsCard bg={borabora2} text={"Maldives"} />
      <SelectsCard bg={keywest} text={"Key West"} />
    </div>
  );
};

export default Selects;
