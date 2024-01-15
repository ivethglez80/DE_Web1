import ondita from "./../../icons/ondita.svg"

const GuestDetail = ({ id, nombre, apellido, telefono, email, cantidad, asiste, closeDetail }) => {




    return (
        <>
            <div className="absolute inset-0 z-50 flex justify-center items-center font-julius text-white">
                <div className="bg-white rounded-3xl w-5/6 h-1/3 flex justify-center items-center">

                    <div className="bg-green-950 opacity-50 w-11/12 pb-8 rounded-3xl">

                        <div className="flex justify-end mr-20 pt-2">
                            <button onClick={closeDetail} className="bg-musgo hover:bg-musgo2 rounded-full py-2 w-10 md:w-24 font-julius text-white">
                                Cerrar
                            </button>
                        </div>

                        <div className="">

                            <div className="flex justify-center gap-5 mb-3">
                                <h2 className="">Nombre: {nombre}</h2>
                                <h2>{apellido ? apellido : "apellido"}</h2>
                            </div>

                            <div className="flex justify-center gap-5 mb-3">
                                <div>
                                    <a href={`mailto:${email}`}><p>Email: {email}</p></a>
                                </div>
                                <div>
                                    <a href={`https://api.whatsapp.com/send?phone=${telefono}&text=Hola!`} target="_blank"><p>Telefono: {telefono}</p></a>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <p>Grupo familiar: {cantidad}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default GuestDetail;