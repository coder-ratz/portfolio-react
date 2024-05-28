import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';

const App = () => {
  let { tags, ids } = useParams();

  return (
    <Router basename="/portfolio-react">
      <Navbar />
      <Routes>
        <Route path="/tags/:tags" element={<Projects tags={tags} />} />
        <Route path="/ids/:ids" element={<Projects ids={ids} />} />
        <Route path="/id/:id" element={<ProjectPage />} />
        <Route path="/" element={<Projects />} />    </Routes>
    </Router>
  )
}

export default App;