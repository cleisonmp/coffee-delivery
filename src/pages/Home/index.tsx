import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeeList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Home() {
  return (
    <main className="flex flex-col mt-24">
      <Intro />
      <h2 className="mt-24 font-['Baloo_2'] font-bold text-3xl text-base-title ">
        Nossos cafés
      </h2>
      <CoffeeList />
      <ToastContainer
        position="top-right"
        autoClose={6000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        toastClassName="bg-base-card"
        progressClassName="bg-gradient-to-l from-purple-500 to-purple-100"
      />
    </main>
  )
}
