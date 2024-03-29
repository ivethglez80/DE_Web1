import SaveTheDate from "../components/saveTheDate";
import cheers from "./../icons/cheers_2474410.png"
import Config from "../eventData/config";

const Date = () =>{
    return(
        <>
        <div className="text-center pb-10 pt-14 md:pt-14 md:flex md:flex-col md:justify-center">
            <h2 className="font-juana uppercase md:hidden">¡LOS ESPERAMOS PARA <br /> CELEBRAR JUNTOS ESTE DIA</h2>
            <div className="flex flex-row justify-center">
            <h2 className="font-juana uppercase hidden md:block text-3xl">¡LOS ESPERAMOS PARA CELEBRAR JUNTOS ESTE DIA</h2><p className="font-normal md:text-4xl">!</p>
            </div>
            <div className="border-b border-slate-400 pb-10 w-3/6 mx-auto hidden md:block"></div>
        </div>

        <div className="flex flex-row justify-center md:pt-12">
            <div className="font-julius md:border-t-0 md:border-b-0 md:text-3xl md:w-2/6 border-t-2 border-b-2 uppercase h-7 w-24 text-center">{Config.wDia} {Config.wMonthL}</div>
            <div ><img src={cheers} alt="" className="h-12 mx-6 md:h-20"/></div>
            <div className="font-julius md:border-t-0 md:border-b-0 md:text-3xl md:w-2/6 border-t-2 border-b-2 uppercase h-7 w-24 text-center ">{Config.wHour}:{Config.wMin} am</div>
        </div>

        <div className="py-12">
        <SaveTheDate/>
        </div>
        </>
    )
};

export default Date;