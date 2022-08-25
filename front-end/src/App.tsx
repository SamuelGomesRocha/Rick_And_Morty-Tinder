import { MatchScreen } from "./screens/match"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RootScreen } from "./screens/root"
import { Concorrentes } from "./screens/concorrentes"


function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootScreen />} />
        <Route path="/match" element={<MatchScreen />} />
        <Route path="/concorrentes" element={<Concorrentes />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
