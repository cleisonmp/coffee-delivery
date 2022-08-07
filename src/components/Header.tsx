import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../assets/Logo'

export function Header() {
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
          <button className="flex items-center justify-center bg-purple-100 text-purple-900 rounded p-2 text-sm gap-1 hover:bg-base-hover transition-colors">
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </button>
          <NavLink
            to="/checkout"
            title="Carrinho de Compras"
            className={
              'flex items-center justify-center bg-yellow-100 text-yellow-900 rounded p-2 hover:bg-yellow-500 transition-colors'
            }
          >
            <ShoppingCart size={22} weight="fill" />
            <span className="absolute mt-[-2.5rem] mr-[-2.5rem] bg-yellow-900 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
