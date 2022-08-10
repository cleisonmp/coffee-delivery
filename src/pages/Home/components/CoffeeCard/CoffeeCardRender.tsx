import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { memo } from 'react'

export interface CoffeeInfoPoops {
  name: string
  categories: string[]
  type: string
  description: string
  priceFormatted: string
  quantity: number
  handleAddQuantity: () => void
  handleRemoveQuantity: () => void
  handleAddNewCoffeeToCart: () => void
}
const CoffeeInfo = memo(function CoffeeInfo({
  name,
  type,
  categories,
  description,
  priceFormatted,
  quantity,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddNewCoffeeToCart,
}: CoffeeInfoPoops) {
  return (
    <div className="bg-base-card rounded-tr-[2.25rem] rounded-bl-[2.25rem] flex flex-col items-center px-5">
      <img src={'./images/' + type + '.png'} alt="" className="-mt-5" />
      <div className="flex mt-3 px-3 gap-1">
        {categories.map((category, index) => {
          return (
            <span
              key={index}
              className="bg-yellow-100 rounded-full px-2 h-5 text-yellow-900 text-xxs uppercase font-bold leading-tight flex items-center justify-center"
            >
              {category}
            </span>
          )
        })}
      </div>
      <h1 className="mt-4 font-['Baloo_2'] font-bold text-xl text-base-subtitle">
        {name}
      </h1>
      <span className="mt-2 text-sm text-base-label">{description}</span>
      <div className="flex flex-col md:flex-row mt-8 mb-5 w-full items-center justify-between">
        <div>
          <span className="text-sm leading-tight ">R$ </span>
          <span className="mt-4 font-['Baloo_2'] font-bold text-2xl leading-tight">
            {priceFormatted}
          </span>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <div className="flex px-2 gap-2 bg-base-button rounded items-center">
            <button
              onClick={handleRemoveQuantity}
              disabled={quantity <= 0}
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
          <button
            onClick={handleAddNewCoffeeToCart}
            disabled={quantity <= 0}
            className="bg-purple-900 text-white rounded w-[2.375rem] h-[2.375rem] flex items-center justify-center px-2 hover:bg-purple-500 transition-colors disabled:opacity-50"
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
})
export { CoffeeInfo }
