import axios from 'axios'
import { MapPinLine } from 'phosphor-react'
import { FocusEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { NewOrderFormProps } from '../'
import { stateList } from '../../../@types/models'
import { applyMask, onlyNumbers } from '../../../@utils/masks'
import { toast } from 'react-toastify'

export function AddressForm() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<NewOrderFormProps>()

  const hasErrors = Object.keys(errors).length
  const cepErrorMessage = errors.cep?.message
  const streetErrorMessage = errors.street?.message
  const numberErrorMessage = errors.number?.message
  const addressContinuedErrorMessage = errors.addressContinued?.message
  const neighborhoodErrorMessage = errors.neighborhood?.message
  const cityErrorMessage = errors.city?.message
  const stateErrorMessage = errors.state?.message

  const buscaCep = (e: FocusEvent<HTMLInputElement>) => {
    const cepValue = e.target.value
    const cepValueOnlyNumbers = onlyNumbers(cepValue, 8)

    setValue('cep', applyMask(cepValue, 'cep'))

    if (cepValueOnlyNumbers.length === 8) {
      axios
        .get(
          'https://brasilapi.com.br/api/cep/v1/' + String(cepValueOnlyNumbers),
        )
        .then(function (response) {
          // console.log(response.data)
          setValue('street', response.data.street)
          setValue('city', response.data.city)
          setValue('neighborhood', response.data.neighborhood)
          setValue('state', response.data.state)
        })
        .catch(function () {
          // console.error(error.response.status)
          toast.warning('Cep não encontrado', {
            toastId: 'cep-war',
          })
        })
        .then(function () {})
    } else {
      // console.error('Cep inválido')
      toast.error('Cep inválido', {
        toastId: 'cep-inv',
      })
    }
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
        {...register('cep', {
          onChange: (e) => {
            setValue('cep', applyMask(e.target.value, 'cep'))
          },
        })}
        placeholder="Cep"
        onBlur={buscaCep}
        className={
          baseInputStyle + ' mt-8  ' + (cepErrorMessage && 'border-red-500')
        }
        maxLength={9}
        size={9}
      />

      <input
        type="text"
        {...register('street')}
        placeholder="Rua"
        className={
          baseInputStyle +
          ' w-full mt-4 ' +
          (streetErrorMessage && 'border-red-500')
        }
      />
      <div className="flex mt-4 gap-3">
        <input
          type="number"
          {...register('number')}
          placeholder="Número"
          className={
            baseInputStyle +
            ' appearance-none ' +
            (numberErrorMessage && 'border-red-500')
          }
        />
        <input
          type="text"
          {...register('addressContinued')}
          placeholder="Complemento"
          className={
            baseInputStyle +
            ' w-full  ' +
            (addressContinuedErrorMessage && 'border-red-500')
          }
        />
      </div>
      <div className="flex mt-4 gap-3">
        <input
          type="text"
          {...register('neighborhood')}
          placeholder="Bairro"
          className={
            baseInputStyle +
            ' ' +
            (neighborhoodErrorMessage && 'border-red-500')
          }
        />
        <input
          type="text"
          {...register('city')}
          placeholder="Cidade"
          className={
            baseInputStyle + ' w-full ' + (cityErrorMessage && 'border-red-500')
          }
        />

        <select
          {...register('state')}
          className={
            baseInputStyle +
            ' uppercase ' +
            (stateErrorMessage && 'border-red-500')
          }
        >
          <option key="UF" value="" disabled={true}>
            UF
          </option>
          {stateList.map((state) => {
            return (
              <option key={state.uf} value={state.uf}>
                {state.uf}
              </option>
            )
          })}
        </select>
      </div>
      {hasErrors ? (
        <p className="text-xs text-red-500 mt-3">
          Campos obrigatórios não informados
        </p>
      ) : (
        ''
      )}
    </div>
  )
}
/*
<input
          type="text"
          {...register('state', {
            onChange: (e) => {
              setValue('state', e.target.value.replace(/[\W_\d]+/g, ''))
            },
          })}
          placeholder="UF"
          className={
            baseInputStyle +
            ' uppercase ' +
            (stateErrorMessage && 'border-red-500')
          }
          maxLength={2}
          size={2}
        />
*/
