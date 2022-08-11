import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { MouseEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { NewOrderFormProps } from '..'

export function Payment() {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext<NewOrderFormProps>()

  const paymentTypeErrorMessage = errors.paymentType?.message
  const isPaymentTypeSelected = getValues('paymentType')

  const setPaymentMethod = (event: MouseEvent<HTMLButtonElement>) => {
    setValue('paymentType', event.currentTarget.name)
  }

  const buttonTailwindStyle =
    'bg-base-button rounded h-12 p-4 flex gap-3 items-center px-2 hover:bg-base-hover transition-colors leading-relaxed text-xs w-full focus:outline-none focus:shadow-outline focus:shadow-purple-500 ' +
    (paymentTypeErrorMessage ? 'border border-red-300 ' : '')

  return (
    <div className="bg-base-card rounded p-10 ">
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
        <button
          type="button"
          {...register('paymentType')}
          onClick={setPaymentMethod}
          name="Cartão de Crédito"
          className={
            buttonTailwindStyle +
            (isPaymentTypeSelected === 'Cartão de Crédito'
              ? ' border border-purple-500'
              : ' ')
          }
        >
          <CreditCard size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </button>
        <button
          type="button"
          {...register('paymentType')}
          onClick={setPaymentMethod}
          name="Cartão de Débito"
          className={
            buttonTailwindStyle +
            (isPaymentTypeSelected === 'Cartão de Débito'
              ? ' border border-purple-500'
              : ' ')
          }
        >
          <Bank size={16} color="#8047F8" />
          CARTÃO DE DÉBITO
        </button>
        <button
          type="button"
          {...register('paymentType')}
          onClick={setPaymentMethod}
          name="Dinheiro"
          className={
            buttonTailwindStyle +
            (isPaymentTypeSelected === 'Dinheiro'
              ? ' border border-purple-500'
              : ' ')
          }
        >
          <Money size={16} color="#8047F8" />
          DINHEIRO
        </button>
      </div>
      {paymentTypeErrorMessage ? (
        <p className="text-xs text-red-500 mt-3">
          Selecionar forma de pagamento é obrigatório
        </p>
      ) : (
        ''
      )}
    </div>
  )
}
