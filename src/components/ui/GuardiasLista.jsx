

const TablaG = () => {
    return (
        <table className='w-full mt-5 table-auto shadow-lg  bg-white'>
            <thead className='bg-gray-800 text-slate-400'>
                <tr>
                    <th className='p-2'>Nombre</th>
                    <th className='p-2'>Apellido</th>
                    <th className='p-2'>Cédula</th>
                    <th className='p-2'>Lugar</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b hover:bg-gray-300 text-center">
                    <td>Juan</td>
                    <td>Pérez</td>
                    <td>1717171717</td>
                    <td>Parqueadero ESFOT</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TablaG