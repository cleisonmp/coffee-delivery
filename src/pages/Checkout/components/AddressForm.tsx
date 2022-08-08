import { MapPinLine } from 'phosphor-react'

export function AddressForm() {
  return (
    <form action="" className="bg-base-card rounded p-10">
      <div className="flex gap-2">
        <MapPinLine size={22} color="#C47F17" />
        <div className="flex flex-col">
          <span className="text-base-subtitle">Endereço de Entrega</span>
          <span className="text-sm mt-[0.125rem]">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
      <input type="text" placeholder="Rua" className="w-full" />
    </form>
  )
}
