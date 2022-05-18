import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Example } from "./Components/Example"

export const TestApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Example /> } />
      </Routes>
    </BrowserRouter>
  )
}
