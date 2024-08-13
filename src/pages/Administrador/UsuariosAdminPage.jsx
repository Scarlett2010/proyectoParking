import TablaU from "../../components/ui/UsuarioLista";

const Usuarios = () => {
  return (
    <div className="flex justify-end">
      <div className="flex-1">
        <h1 className="font-black text-4xl text-gray-500">Lista Usuarios</h1>
        <hr className="my-4" />
        <TablaU />
      </div>
    </div>
  );
};

export default Usuarios;
