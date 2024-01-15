import Config from "../eventData/config";

const WedPlace = () => {
    const wedPlace = `${Config.wLINK}`
    return (
        <>
            <div className="bg">
                <div>Nombre del lugar de ceremonia religiosa</div>
                <div>direccion linea 1</div>
                <div>direccion linea 2</div>
                <a href="wedPlace" target="_blank">
                    <button>
                        ver ubicacion
                    </button>
                </a>
            </div>
        </>
    )
};

export default WedPlace;