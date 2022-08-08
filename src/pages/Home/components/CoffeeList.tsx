import { CoffeeCard } from './CoffeeCard'
import { storeCoffeeList } from '../../../@types/storeCoffeeList'

export function CoffeeList() {
  return (
    <main className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
      {storeCoffeeList.map((coffee) => {
        return <CoffeeCard key={coffee.id} coffeeData={coffee} />
      })}
    </main>
  )
}
