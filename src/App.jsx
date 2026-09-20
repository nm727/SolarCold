import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import Overview from './pages/Overview/Overview'
import Team from './pages/Team/Team'
import Gallery from './pages/Gallery/Gallery'
import Roadmap from './pages/Roadmap/Roadmap'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
