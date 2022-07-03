import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import List from "./pages/list/List";
import CourseList from "./pages/list/CourseList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs, advisorFileInputs, generalInputs, courseFileInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NewCourse from "./pages/new/NewCourse";
import AdvisorList from "./pages/list/AdvisorList";
import NewAdvisor from "./pages/new/NewAdvisor";
import InfoList from "./pages/list/InfoList";
import NewInfo from "./pages/new/NewInfo";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className="app">
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
                path=":courseId"
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
                path=":advisorId"
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
                    <NewAdvisor inputs={advisorFileInputs} title="Add New Advisor" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="general">
              <Route
                index
                element={
                  <RequireAuth>
                    <InfoList />
                  </RequireAuth>
                }
              />
              <Route
                path=":infoId"
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
                    <NewInfo inputs={generalInputs} title="Add New Information" />
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