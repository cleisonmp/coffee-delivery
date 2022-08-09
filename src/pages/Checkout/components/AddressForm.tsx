import axios from 'axios'
import { MapPinLine } from 'phosphor-react'
import { FocusEvent } from 'react'

export function AddressForm() {
  const buscaCep = (e: FocusEvent<HTMLInputElement>) => {
    const cepValue = e.target.value
    console.log(cepValue)

    axios
      .get('https://brasilapi.com.br/api/cep/v1/' + String(cepValue))
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
      .then(function () {})
  }
  const baseInputStyle =
    'bg-base-input p-3 placeholder:text-base-label border border-base-button rounded text-sm'
  return (
    <div className="bg-base-card rounded p-10">
      <div className="flex gap-2">
        <MapPinLine size={22} color="#C47F17" />
        <div className="flex flex-col">
          <span className="text-base-subtitle">Endereço de Entrega</span>
          <span className="text-sm mt-[0.125rem]">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
      <input
        type="text"
        placeholder="Cep"
        onBlur={buscaCep}
        className={baseInputStyle + ' mt-8 '}
        maxLength={9}
        size={9}
      />
      <input
        type="text"
        placeholder="Rua"
        className={baseInputStyle + ' w-full mt-4'}
      />
      <div className="flex mt-4 gap-3">
        <input
          type="number"
          placeholder="Número"
          className={baseInputStyle + ' appearance-none'}
        />
        <input
          type="text"
          placeholder="Complemento"
          className={baseInputStyle + ' w-full'}
        />
      </div>
      <div className="flex mt-4 gap-3">
        <input
          type="text"
          placeholder="Bairro"
          className={baseInputStyle + ''}
        />
        <input
          type="text"
          placeholder="Cidade"
          className={baseInputStyle + ' w-full'}
        />
        <input
          type="text"
          placeholder="UF"
          className={baseInputStyle + ' uppercase'}
          maxLength={2}
          size={2}
        />
      </div>
    </div>
  )
}
