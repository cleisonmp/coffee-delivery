import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function Payment() {
  const buttonTailwindStyle =
    'bg-base-button rounded h-12 p-4 flex gap-3 items-center px-2 hover:bg-base-hover transition-colors leading-relaxed text-xs w-full focus:outline-none focus:shadow-outline focus:shadow-purple-500'
  return (
    <div className="bg-base-card rounded p-10">
      <div className="flex gap-2">
        <CurrencyDollar size={22} color="#8047F8" />
        <div className="flex flex-col">
          <span className="text-base-subtitle">Pagamento</span>
          <span className="text-sm mt-[0.125rem]">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="flex gap-3 mt-8">
        <button className={buttonTailwindStyle}>
          <CreditCard size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </button>
        <button className={buttonTailwindStyle}>
          <Bank size={16} color="#8047F8" />
          CARTÃO DE DÉBITO
        </button>
        <button className={buttonTailwindStyle}>
          <Money size={16} color="#8047F8" />
          DINHEIRO
        </button>
      </div>
    </div>
  )
}
