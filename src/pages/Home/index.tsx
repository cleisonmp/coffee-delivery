import { Intro } from './components/Intro'

export function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Intro />
      <h1 className="font-['Baloo_2'] font-bold text-3xl text-base-title">
        Nossos cafés
      </h1>
    </div>
  )
}
