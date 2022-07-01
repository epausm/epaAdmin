import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem1Data from "../../components/datatable/Sem1Data"


const Sem1List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem1Data/>
      </div>
    </div>
  )
}

export default Sem1List