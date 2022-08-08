import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-24 px-8 mb-40">
      <Header />
      <Outlet />
    </div>
  )
}
