import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem5Data from "../../components/datatable/Sem5Data"


const Sem5List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem5Data/>
      </div>
    </div>
  )
}

export default Sem5List