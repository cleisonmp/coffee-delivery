import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AddressForm } from './components/AddressForm'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Cep é um campo obrigatório'),
  street: zod.string().min(1, 'Endereço é um campo obrigatório'),
  number: zod.string().min(1, 'Número é um campo obrigatório'),
  addressContinued: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Bairro é um campo obrigatório'),
  city: zod.string().min(1, 'Cidade é um campo obrigatório'),
  state: zod.string().min(2, 'UF é um campo obrigatório'),
  paymentType: zod
    .string()
    .min(1, 'Selecionar forma de pagamento é obrigatório'),
})
export type NewOrderFormProps = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const newOrderFormHookData = useForm<NewOrderFormProps>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      addressContinued: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentType: '',
    },
  })
  const { handleSubmit, reset } = newOrderFormHookData // watch,
  const { clearCart } = useContext(CartContext)
  const navigateTo = useNavigate()

  const formWithError = (data: Object) => {
    // console.log('form with error')
    // console.log(data)
  }
  const createNewOrder = (data: NewOrderFormProps) => {
    reset()
    clearCart()
    navigateTo('/orderfinished', {
      replace: true,
      state: {
        street: data.street,
        number: data.number,
        addressContinued: data.addressContinued,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
        paymentType: data.paymentType,
        deliveryTime: '20 - 30 minutos',
      },
    })
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit(createNewOrder, formWithError)}
        action=""
        className="flex flex-col md:flex-row mt-10 gap-8 justify-between"
      >
        <FormProvider {...newOrderFormHookData}>
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-['Baloo_2'] font-bold text-lg text-base-subtitle">
              Complete seu pedido
            </h2>

            <AddressForm />

            <Payment />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-['Baloo_2'] font-bold text-lg text-base-subtitle">
              Cafés selecionados
            </h2>
            <Cart
              createNewOrderHandler={createNewOrder}
              formWithErrorHandler={formWithError}
            />
          </div>
        </FormProvider>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        toastClassName="bg-base-card"
      />
    </main>
  )
}
