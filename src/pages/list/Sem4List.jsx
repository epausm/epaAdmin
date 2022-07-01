import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem4Data from "../../components/datatable/Sem4Data"


const Sem4List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem4Data/>
      </div>
    </div>
  )
}

export default Sem4List