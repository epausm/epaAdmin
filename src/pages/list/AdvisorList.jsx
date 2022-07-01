import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AdvisorData from "../../components/datatable/AdvisorData"


const AdvisorList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AdvisorData/>
      </div>
    </div>
  )
}

export default AdvisorList