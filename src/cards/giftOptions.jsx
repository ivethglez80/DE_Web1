import GiftData from "../modules/giftData";
import BankData from "../modules/bankData";
import box from "./../icons/gift-box_4530596.png"




const GiftOptionsCard = ({ closeCard }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative border-4 border-musgo rounded-xl w-11/12 max-w-2xl bg-white p-4 z-10">
                <button onClick={closeCard} className="bg-musgo text-white px-3 rounded-lg absolute top-2 right-2">X</button>
                <div className="w-full flex justify-around items-center">
                    <div className="">
                        <img src={box} alt="" className="h-20"/>
                    </div>
                    <div className="">
                    <BankData />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftOptionsCard;