import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem6Data from "../../components/datatable/Sem6Data"


const Sem6List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem6Data/>
      </div>
    </div>
  )
}

export default Sem6List