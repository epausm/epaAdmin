import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import InfoData from "../../components/datatable/InfoData"


const InfoList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <InfoData/>
      </div>
    </div>
  )
}

export default InfoList