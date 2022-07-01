import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem2Data from "../../components/datatable/Sem2Data"


const Sem2List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem2Data/>
      </div>
    </div>
  )
}

export default Sem2List