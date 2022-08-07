import { CoffeeCard } from './CoffeeCard'

export function CoffeeList() {
  return (
    <main className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
      <CoffeeCard type="americano" />
      <CoffeeCard type="arabe" />
      <CoffeeCard type="capuccino" />
      <CoffeeCard type="chocolate_quente" />
      <CoffeeCard type="com_leite" />
      <CoffeeCard type="cubano" />
      <CoffeeCard type="expresso" />
      <CoffeeCard type="expresso_cremoso" />
      <CoffeeCard type="gelado" />
      <CoffeeCard type="irlandes" />
      <CoffeeCard type="latte" />
      <CoffeeCard type="macchiato" />
      <CoffeeCard type="mochaccino" />
    </main>
  )
}
