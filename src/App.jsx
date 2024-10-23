import { useState } from 'react'
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import Styles from "./components/Nav.module.css"
import Container from "./components/Container"
import innerContainer from "./components/innerContainer"
import FoodDetail from "./components/FoodDetail"
import styles from "./components/innercontainer.module.css"
import "./App.css"
function App() {
  const [foodData, setfoodData] = useState([])
  const [foodId, setfoodId] = useState("")
  return (
    <div className="App">
      <Nav className={Styles.navStyles}/>
      <Search 
        foodData={foodData}
        setfoodData={setfoodData}
      />
      <Container>
        <innerContainer className={styles.inner}>
          <FoodList setfoodId={setfoodId} foodData={foodData}/>
        </innerContainer>
        <innerContainer className={styles.inner}>
          <FoodDetail foodId={foodId}/>
        </innerContainer>
      </Container>
    </div>
  )
}

export default App
