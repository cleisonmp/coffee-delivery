import { Plus, Minus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../../@types/models'

interface CoffeeCardProps {
  coffeeData: Coffee
}
export function CoffeeCardSideways({ coffeeData }: CoffeeCardProps) {
  const { name, type, inventoryAmount } = coffeeData
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'BRL',
  }).format(coffeeData.price)

  const [quantity, setQuantity] = useState(0)

  const handleAddQuantity = () => {
    if (quantity < inventoryAmount) {
      setQuantity((state) => {
        return state + 1
      })
    }
  }
  const handleRemoveQuantity = () => {
    if (quantity > 0) {
      setQuantity((state) => {
        return state - 1
      })
    }
  }

  return (
    <div className="flex gap-[3.125rem] border-b border-base-button mb-6 pb-6">
      <div className="flex gap-5">
        <img src={'./images/' + type + '.png'} alt="" className="h-16" />
        <div>
          <h1 className="font-bold text-base-subtitle">{name}</h1>

          <div className="flex gap-2 mt-2">
            <div className="flex px-2 gap-2 bg-base-button rounded items-center">
              <button
                onClick={handleRemoveQuantity}
                className="text-xl text-purple-500 hover:text-purple-900 transition-colors"
              >
                <Minus size={14} weight="bold" />
              </button>
              <span className="text-base-title">{quantity}</span>
              <button
                onClick={handleAddQuantity}
                className="text-xl text-purple-500 hover:text-purple-900 transition-colors"
              >
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <button className="bg-base-button rounded h-8 flex gap-1 items-center justify-center px-2 hover:bg-base-hover transition-colors leading-relaxed text-xs">
              <Trash size={16} color="#8047F8" />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span className="font-bold leading-tight">{price}</span>
    </div>
  )
}
