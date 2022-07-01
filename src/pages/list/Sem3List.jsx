import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Sem3Data from "../../components/datatable/Sem3Data"


const Sem3List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Sem3Data/>
      </div>
    </div>
  )
}

export default Sem3List