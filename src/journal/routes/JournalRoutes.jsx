import { Navigate, Route, Routes } from "react-router-dom"
import { MainView } from "../views/mainView"

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainView/>}/>

      <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}