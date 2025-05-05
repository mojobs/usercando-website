
import HomePage from "./pages/HomePage.tsx"
import BlogPage from "./pages/BlogPage.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
     
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/blog" element={<BlogPage/>}></Route>
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
