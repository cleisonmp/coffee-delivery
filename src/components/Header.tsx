import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../assets/Logo'

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <NavLink to="/" title="Página Inicial">
          <Logo />
        </NavLink>

        <NavLink to="/checkout" title="Carrinho de Compras">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </header>
  )
}
