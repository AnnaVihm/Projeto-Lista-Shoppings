import { Routes, Route } from 'react-router'
import Login from '../pages/Login'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
