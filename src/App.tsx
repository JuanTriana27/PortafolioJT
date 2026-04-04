import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import { GoogleAnalytics } from './components/Analytics'

export default function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}