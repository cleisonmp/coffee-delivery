import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../assets/Logo'
import { CartContext } from '../contexts/CartContext'
import { toast } from 'react-toastify'

export function Header() {
  const { coffeeList } = useContext(CartContext)

  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <NavLink
          to="/"
          title="Página Inicial"
          className={'p-1 rounded hover:bg-purple-100 transition-colors'}
        >
          <Logo />
        </NavLink>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="flex items-center justify-center bg-purple-100 text-purple-900 rounded p-2 text-sm gap-1 hover:bg-base-hover transition-colors"
          >
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </button>
          <NavLink
            to="/checkout"
            onClick={(e) => {
              if (coffeeList.length <= 0) {
                e.preventDefault()
                toast.info(
                  'Seu carrinho está vazio, adicione alguns itens antes',
                )
              }
            }}
            title="Carrinho de Compras"
            className={
              'flex items-center justify-center bg-yellow-100 text-yellow-900 rounded p-2 hover:bg-yellow-500 transition-colors'
            }
          >
            <ShoppingCart size={22} weight="fill" />
            {coffeeList.length > 0 && (
              <span className="absolute mt-[-2.5rem] mr-[-2.5rem] bg-yellow-900 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                {coffeeList.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
