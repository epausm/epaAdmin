import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem8Data from "../../components/datatable/Sem8Data"


const Sem8List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem8Data/>
      </div>
    </div>
  )
}

export default Sem8List