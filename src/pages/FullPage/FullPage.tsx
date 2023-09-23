import Header from "../../components/Header/Header"
import MainPage from "../../components/Main/MainPage"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
function FullPage() {
  const _authVal = useAuth()
  return (
    <section>
      {!_authVal.user && <Navigate to={"/login"} replace={true}/>}
      <Header/>
        <MainPage/>
    </section>
  )
}

export default FullPage