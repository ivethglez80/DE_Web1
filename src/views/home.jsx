import Hero from "./Hero"
import CountDown from "../modules/countdown"
import Date from "./date"
import PartyPlace from "./partyPlace"
import DressCode from "./dressCode"
import PhotoCarrousel from "../modules/photoCarrousel"
import FocusPhoto from "./focusPhoto"
import GiftList from "./giftSection"
import Attendance from "./attendance"
import End from "./end"

const Home = () => {
    return (
        <>
            <Hero />
            <CountDown />
            <Date />
            <PartyPlace />
            <DressCode />
            <PhotoCarrousel />
            <FocusPhoto />
            <GiftList />
            <Attendance />
            <End />            
        </>
    )
}

export default Home;