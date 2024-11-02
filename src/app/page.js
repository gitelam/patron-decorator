"use client";
import React from "react";
import VueloConfigurator from "../app/components/VueloConfigurator";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <Navbar />
      <VueloConfigurator />
    </div>
  );
}
