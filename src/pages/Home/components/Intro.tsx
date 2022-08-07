import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeCup from '../assets/coffee-cup.png'

export function Intro() {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[607px,1fr] gap-14">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-['Baloo_2'] font-bold text-5xl text-base-title">
            Encontre o café perfeito
            <br /> para qualquer hora do dia
          </h1>
          <span className="text-xl text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <span className="flex items-center gap-3">
            <div className="bg-yellow-900 text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
              <ShoppingCart size={22} weight="fill" />
            </div>
            Compra simples e segura
          </span>
          <span className="flex items-center gap-3">
            <div className="bg-base-text text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
              <Package size={22} weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </span>
          <span className="flex items-center gap-3">
            <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
              <Timer size={22} weight="fill" />
            </div>
            Entrega rápida e rastreada
          </span>
          <span className="flex items-center gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
              <Coffee size={22} weight="fill" />
            </div>
            O café chega fresquinho até você
          </span>
        </div>
      </div>
      <div className="hidden md:block ">
        <img src={CoffeeCup} alt="" className="" />
      </div>
    </div>
  )
}
