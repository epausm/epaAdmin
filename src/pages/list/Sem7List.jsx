import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem7Data from "../../components/datatable/Sem7Data"


const Sem7List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem7Data/>
      </div>
    </div>
  )
}

export default Sem7List