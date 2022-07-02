import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import CourseData from "../../components/datatable/CourseData"
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
          <CourseData/>
        
      </div>
    </div>
  )
}

export default Home