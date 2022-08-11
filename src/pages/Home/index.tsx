import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <main className="flex flex-col mt-24">
      <Intro />
      <h2 className="mt-24 font-['Baloo_2'] font-bold text-3xl text-base-title">
        Nossos cafés
      </h2>
      <CoffeeList />
    </main>
  )
}
