const FormularioPerfilG = () => {
    function handleSubmit () {

    }
  return (
    <form onChange ={handleSubmit}>
      <div>
        <label
          htmlFor="nombre"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre:{" "}
        </label>
        <input
          id="nombre"
          type="text"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
          placeholder="Juan"
          name="nombre"
        />
      </div>
      <div>
        <label
          htmlFor="apellido"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Apellido:{" "}
        </label>
        <input
          id="apellido"
          type="text"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
          placeholder="Pérez"
          name="apellido"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Email:{" "}
        </label>
        <input
          id="email"
          type="text"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
          placeholder="ejemplo@gmail.com"
          name="email"
        />
      </div>

      <div>
        <label
          htmlFor="placa_vehiculo"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Placa_vehiculo:{" "}
        </label>
        <input
          id="placa_vehiculo"
          type="text"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
          placeholder="AAA-01"
          name="placa_vehiculo"
        />
      </div>
      <div>
        <label
          htmlFor="Telefono"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Telefono:{" "}
        </label>
        <input
          id="telefono"
          type="number"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
          placeholder="0999999999"
          name="placa_vehiculo"
        />
      </div>

      <input
        type="submit"
        className="bg-orange-300 w-full p-3 
        text-white uppercase font-bold rounded-lg 
        hover:bg-gray-600 cursor-pointer transition-all"
        value="Actualizar"
      />
    </form>
  );
};

export default FormularioPerfilG;