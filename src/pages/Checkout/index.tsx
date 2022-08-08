import { useForm } from 'react-hook-form'
import { AddressForm } from './components/AddressForm'
import { Cart } from './components/Cart'
import { Payment } from './components/Payment'

interface NewOrderFormProps {
  address: string
}
export function Checkout() {
  const newOrderFormHookData = useForm<NewOrderFormProps>({
    defaultValues: {
      address: '',
    },
  })
  const { handleSubmit, reset } = newOrderFormHookData

  const createNewOrder = (data: any) => {
    console.log(data)
    reset()
  }
  return (
    <main className="flex flex-col md:flex-row mt-10 gap-8 justify-between">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="font-['Baloo_2'] font-bold text-lg text-base-subtitle">
          Complete seu pedido
        </h1>
        <form onSubmit={handleSubmit(createNewOrder)} action="">
          <AddressForm />
        </form>
        <Payment />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-['Baloo_2'] font-bold text-lg text-base-subtitle">
          Cafés selecionados
        </h1>
        <Cart />
      </div>
    </main>
  )
}
