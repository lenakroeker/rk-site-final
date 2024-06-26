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
import Dispatches from "./pages/Dispatches.jsx";
import DispatchDetail from "./pages/DispatchDetail.jsx";
import MarshallBursary from "./pages/MarshallBursary.jsx";
import AddProject from "./admin/AddProject.jsx";
import AddNews from "./admin/AddNews.jsx";
import AddDispatch from "./admin/AddDispatch.jsx";
import AddEvent from "./admin/AddEvent.jsx";
import AdminPage from "./admin/Admin.jsx";
import EditDeleteProject from "./admin/EditDeleteProject.jsx";
import EditDeleteEvent from "./admin/EditDeleteEvent.jsx";
import EditDeleteArticle from "./admin/EditDeleteArticle.jsx";
import EditDeleteDispatch from "./admin/EditDeleteDispatch.jsx";
import EditDispatch from "./admin/EditDispatch.jsx";
import EditProject from "./pages/EditProject.jsx";
import EditEvent from "./admin/EditEvent.jsx";
import EditNewsArticle from "./admin/EditNewsArticle.jsx";
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
        <Route path="/dispatches" element={<Dispatches />} />
        <Route path="/dispatches/:id" element={<DispatchDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/murdena-and-albert-marshall-bursary"
          element={<MarshallBursary />}
        />
        <Route
          path="/admin/home"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/addproject"
          element={
            <PrivateRoute>
              <AddProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/addnews"
          element={
            <PrivateRoute>
              <AddNews />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/adddispatch"
          element={
            <PrivateRoute>
              <AddDispatch />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/addevent"
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
        <Route
          path="/admin/edit-delete-event"
          element={
            <PrivateRoute>
              <EditDeleteEvent />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-event/:id"
          element={
            <PrivateRoute>
              <EditEvent />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-delete-article"
          element={
            <PrivateRoute>
              <EditDeleteArticle />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-article/:id"
          element={
            <PrivateRoute>
              <EditNewsArticle />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-delete-dispatch"
          element={
            <PrivateRoute>
              <EditDeleteDispatch />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-dispatch/:id"
          element={
            <PrivateRoute>
              <EditDispatch />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
