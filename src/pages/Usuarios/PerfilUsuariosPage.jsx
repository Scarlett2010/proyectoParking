// import React from 'react'
import { CardPerfilU } from "../../components/Perfil/CardPerfilU";
import FormularioPerfilU from "../../components/Perfil/FormularioPerfilU";

const PerfilUsuarios = () => {
  return (
    <>
      <div>
        <h1 className="font-black text-4xl text-gray-500">Perfil</h1>
        <hr className="my-4" />
      </div>

      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png"
          alt="img-client"
          className="m-auto "
          width={120}
          height={120}
        />
      </div>

      <div className="flex justify-around gap-x-8 flex-wrap gap-y-8 md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <FormularioPerfilU />
        </div>
        <div className="w-full md:w-1/2">
          <CardPerfilU />
        </div>
      </div>
    </>
  );
};

export default PerfilUsuarios;

// formulario para actualizar datos return (
//   <div className="flex w-full justify-items-end ">
//     <div className="w-2/3 bg-celeste-20 flex flex-col items-center justify-center gap-5">
//       <h1 className="text-4xl font-bold text-white "></h1>
//       <div className="w-1/2">
//         <Card>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="flex flex-col w-full"
//           >
//             <Label text="Nombre" />
//             <Input type="text" placeholder="Juan" {...register("nombre")} />
//             <Label text="Apellido" />
//             <Input
//               type="text"
//               placeholder="Perez"
//               {...register("apellido")}
//             />
//             <Label text="Cedula" />
//             <Input
//               type="number"
//               placeholder="1548789542"
//               {...register("cedula")}
//             />
//             <Label text="Telefono" />
//             <Input
//               type="number"
//               placeholder="123456789"
//               {...register("telefono")}
//             />
//             <Button type="submit">Actualizar</Button>
//           </form>
//         </Card>
//       </div>
//     </div>
//     <div className="w-1/3">
//       <img
//         src="/src/assets/images/moto.png"
//         alt="carretera"
//         className="w-full h-[100vh]"
//       />
//     </div>
//   </div>
// );
