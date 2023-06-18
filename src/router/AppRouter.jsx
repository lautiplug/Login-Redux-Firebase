import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {

  const {status} = useCheckAuth()


  // En este punto de la aplicación, "CheckingAuth" está por encima en la jerarquía de componentes que las demás rutas.
  // Esto quiere decir que mientras la app esté "checking" sólo se va a mostrar "CheckingAuth"
  if (status === "checking") {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        (status === "authenticated")
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
