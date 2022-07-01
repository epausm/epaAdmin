import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import List from "./pages/list/List";
//import ProductList from "./pages/list/ProductList";
import CourseList from "./pages/list/CourseList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs, courseInputs, advisorInputs, infoInputs, courseFileInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
//import NewProduct from "./pages/new/NewProduct";
import NewCourse from "./pages/new/NewCourse";
import NewSem1 from "./pages/new/NewSem1";
import Sem1List from "./pages/list/Sem1List";
import Sem2List from "./pages/list/Sem2List";
import NewSem2 from "./pages/new/NewSem2";
import Sem3List from "./pages/list/Sem3List";
import NewSem3 from "./pages/new/NewSem3";
import NewSem4 from "./pages/new/NewSem4";
import Sem4List from "./pages/list/Sem4List";
import NewSem5 from "./pages/new/NewSem5";
import Sem5List from "./pages/list/Sem5List";
import NewSem6 from "./pages/new/NewSem6";
import Sem6List from "./pages/list/Sem6List";
import NewSem7 from "./pages/new/NewSem7";
import Sem7List from "./pages/list/Sem7List";
import NewSem8 from "./pages/new/NewSem8";
import Sem8List from "./pages/list/Sem8List";
import AdvisorList from "./pages/list/AdvisorList";
import NewAdvisor from "./pages/new/NewAdvisor";
import InfoList from "./pages/list/InfoList";
import NewInfo from "./pages/new/NewInfo";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            {/*<Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <ProductList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewProduct inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
              </Route>*/}
            <Route path="courses">
              <Route
                index
                element={
                  <RequireAuth>
                    <CourseList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewCourse inputs={courseFileInputs} title="Add New Course" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="advisor">
              <Route
                index
                element={
                  <RequireAuth>
                    <AdvisorList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewAdvisor inputs={advisorInputs} title="Add New Advisor" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="information">
              <Route
                index
                element={
                  <RequireAuth>
                    <InfoList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewInfo inputs={infoInputs} title="Add New Information" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester1">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem1List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem1 inputs={courseInputs} title="Add New Course (Semester 1)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester2">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem2List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem2 inputs={courseInputs} title="Add New Course (Semester 2)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester3">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem3List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem3 inputs={courseInputs} title="Add New Course (Semester 3)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester4">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem4List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem4 inputs={courseInputs} title="Add New Course (Semester 4)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester5">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem5List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem5 inputs={courseInputs} title="Add New Course (Semester 5)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester6">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem6List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem6 inputs={courseInputs} title="Add New Course (Semester 6)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester7">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem7List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem7 inputs={courseInputs} title="Add New Course (Semester 7)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="semester8">
              <Route
                index
                element={
                  <RequireAuth>
                    <Sem8List/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewSem8 inputs={courseInputs} title="Add New Course (Semester 8)" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;