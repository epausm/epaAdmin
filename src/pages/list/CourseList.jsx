import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CourseData from "../../components/datatable/CourseData"


const CourseList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CourseData/>
      </div>
    </div>
  )
}

export default CourseList