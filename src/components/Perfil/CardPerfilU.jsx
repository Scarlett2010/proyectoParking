export const CardPerfilU = () => {
  return (
    <div
      className="bg-white border border-slate-200 h-full p-4 
                        flex flex-col items-center justify-between shadow-xl rounded-lg"
    >
      
      <div className="self-start">
        <p>Nombre: </p>
      </div>
      <div className="self-start">
        <p>Apellido: </p>
      </div>
      <div className="self-start">
        <p>Email: </p>
      </div>
      <div className="self-start">
        <p>Placa_vehiculo: </p>
      </div>
      <div className="self-start">
        <p>Telefono: </p>
      </div>
    </div>
  );
};
