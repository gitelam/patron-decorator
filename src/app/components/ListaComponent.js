import React from "react";

export default function ListaComponent({ vuelosCreados }) {
  return (
    <div>
      <h2 className="text-gray-700 font-semibold p-2 text-lg mt-6">
        Vuelos Creados
      </h2>
      {vuelosCreados.length > 0 ? (
        <div className="flex flex-col gap-3 h-[60vh] w-[80vh] overflow-auto">
          {vuelosCreados.map((vuelo, index) => (
            <div
              key={index}
              className="p-3 border border-gray-300 rounded-md shadow-md bg-gray-50"
            >
              <p>
                <strong>Descripción:</strong> {vuelo.obtenerDescripcion()}
              </p>
              <p>
                <strong>Costo total:</strong> ${vuelo.obtenerCosto()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No se han creado vuelos aún.</p>
      )}
    </div>
  );
}
