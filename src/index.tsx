
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SideBarProvider } from './contexts/SideBarContext.tsx'
import {AuthProvider} from "./contexts/AuthContext.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <SideBarProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SideBarProvider>
  // </React.StrictMode>,
)
