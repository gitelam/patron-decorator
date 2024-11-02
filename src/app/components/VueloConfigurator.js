// components/VueloConfigurator.js
import React, { useState } from "react";
import {
  Vuelo,
  PrimeraClase,
  ClaseTurista,
  ClaseEconomica,
  DecoratorComida,
  DecoratorEquipaje,
  DecoratorAlcohol,
  DecoratorWiFi,
  DecoratorConfort,
} from "../vuelos";

import ListaComponent from "./ListaComponent";

const VueloConfigurator = () => {
  const [tipo_, setTipo_] = useState("");
  const [vuelo, setVuelo] = useState(new ClaseEconomica()); // Valor inicial: Clase Económica
  const [vuelosCreados, setVuelosCreados] = useState([]); // Lista de vuelos creados

  const seleccionarClase = (tipo) => {
    if (tipo === "PrimeraClase") setVuelo(new PrimeraClase());
    else if (tipo === "ClaseTurista") setVuelo(new ClaseTurista());
    else setVuelo(new ClaseEconomica());
  };

  const agregarComida = () => setVuelo(new DecoratorComida(vuelo));
  const agregarEquipaje = () => setVuelo(new DecoratorEquipaje(vuelo));
  const agregarAlcohol = () => setVuelo(new DecoratorAlcohol(vuelo));
  const agregarWiFi = () => setVuelo(new DecoratorWiFi(vuelo));
  const agregarConfort = () => setVuelo(new DecoratorConfort(vuelo));

  const crearVuelo = () => {
    setVuelosCreados([...vuelosCreados, vuelo]);
    setVuelo(new ClaseEconomica()); // Reiniciar a valor inicial
  };

  return (
    <div className="w-full h-full  flex flex-1 justify-evenly items-center">
      <div className="p-2 w-1/3 border shadow-md rounded-md flex flex-col gap-4 text-md">
        <h1 className="text-gray-700 font-semibold p-2 text-lg">
          Personalizar vuelo
        </h1>
        <div className="border border-black/30 px-2 py-2 rounded-md text-md">
          <label className="text-md">Selecciona la clase de vuelo: </label>
          <select
            className="border rounded-md p-1 border-black/40 text-sm shadow-md"
            onChange={(e) => {
              seleccionarClase(e.target.value);
              setTipo_(e.target.value);
            }}
          >
            <option value="ClaseEconomica">Clase Económica</option>
            <option value="ClaseTurista">Clase Turista</option>
            <option value="PrimeraClase">Primera Clase</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Descripción del vuelo:</strong> {vuelo.obtenerDescripcion()}
          </p>
          <p>
            <strong>Costo total:</strong> ${vuelo.obtenerCosto()}
          </p>
        </div>
        <h3 className="font-semibold text-lg">Opciones Adicionales:</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-600"
            onClick={agregarComida}
          >
            Agregar Comida
          </button>

          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-600"
            onClick={agregarEquipaje}
          >
            Agregar Equipaje
          </button>
          {tipo_ == "PrimeraClase" && (
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-600"
              onClick={agregarAlcohol}
            >
              Agregar Servicio de Alcohol
            </button>
          )}
          {(tipo_ == "ClaseTurista" || vuelo == "PrimeraClase") && (
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-600"
              onClick={agregarWiFi}
            >
              Agregar WiFi
            </button>
          )}
          {tipo_ == "ClaseEconomica" && (
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-blue-600"
              onClick={agregarConfort}
            >
              Agregar Paquete Confort
            </button>
          )}
        </div>
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
          onClick={crearVuelo}
        >
          Crear Vuelo
        </button>
      </div>

      <ListaComponent vuelosCreados={vuelosCreados} />
    </div>
  );
};

export default VueloConfigurator;
