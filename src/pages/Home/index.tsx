import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <h1 className="mt-24 font-['Baloo_2'] font-bold text-3xl text-base-title">
        Nossos cafés
      </h1>
      <CoffeeList />
    </div>
  )
}
