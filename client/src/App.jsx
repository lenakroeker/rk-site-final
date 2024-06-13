import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Media from "./pages/Media.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Contact from "./pages/Contact.jsx";
import CV from "./pages/CV.jsx";
import Matchbox from "./pages/Matchbox.jsx";
import News from "./pages/News.jsx";
import AddProject from "./pages/AddProject.jsx";
import AddArticle from "./pages/AddArticle.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import AdminPage from "./pages/Admin.jsx";
import EditDeleteProject from "./pages/EditDeleteProject.jsx";
import EditProject from "./pages/EditProject.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/matchbox" element={<Matchbox />} />
        <Route path="/news" element={<News />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/home"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/home/addproject"
          element={
            <PrivateRoute>
              <AddProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/home/addarticle"
          element={
            <PrivateRoute>
              <AddArticle />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/home/addevent"
          element={
            <PrivateRoute>
              <AddEvent />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-delete-project"
          element={
            <PrivateRoute>
              <EditDeleteProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-project/:id"
          element={
            <PrivateRoute>
              <EditProject />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
