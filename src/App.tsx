import { Header } from "./components/Apresentation/Header/Header"
import { Apresentation } from "./components/Apresentation/Apresentation"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Works } from "./components/Works/Works"

function App() {

  return (
    <div className="App">
      <Header />
      <Apresentation />
      <AboutMe />
      <Works />
    </div>
  )
}

export default App
