
import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"

import './App.css';
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
