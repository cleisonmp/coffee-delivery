import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import OrderFinishedIllustration from './assets/orderFinishedIllustration.png'

interface LocationProps {
  street: string
  number: number
  addressContinued: string
  neighborhood: string
  city: string
  state: string
  paymentType: string
  deliveryTime: string
}
export function OrderFinished() {
  const navigateTo = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!location.state) {
      navigateTo('/')
    }
  }, [location.state, navigateTo])

  if (!location.state) {
    return <></>
  }

  const {
    street,
    number,
    addressContinued,
    neighborhood,
    city,
    state,
    paymentType,
    deliveryTime,
  } = location.state as LocationProps

  return (
    <div className="flex flex-col mt-20 gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="font-['Baloo_2'] font-bold text-3xl text-yellow-900">
          Uhu! Pedido confirmado
        </h1>
        <span className="text-xl text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-[6.375rem]">
        <div className="bg-gradient-to-r from-yellow-500 to-purple-500 p-[1px] rounded-tr-[2.25rem] rounded-bl-[2.25rem] w-full max-h-[17rem] max-w-[33rem]">
          <div className="flex flex-col bg-base-background w-full h-full rounded-tr-[2.18rem] rounded-bl-[2.18rem] p-5 md:p-10 gap-8 ">
            <div className="flex items-center gap-3 w-full">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
                <MapPin size={22} weight="fill" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="">
                  Entrega em{' '}
                  <span className="font-bold">
                    {street + ', ' + number + ' ' + addressContinued}
                  </span>
                </span>
                <span>{neighborhood + ' - ' + city + ', ' + state}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full">
              <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
                <Timer size={22} weight="fill" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="">Previsão de entrega</span>
                <span className="font-bold">{deliveryTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full">
              <div className="bg-yellow-900 text-white rounded-full w-8 h-8 flex items-center justify-center px-2">
                <CurrencyDollar size={22} weight="fill" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="">Pagamento na entrega</span>
                <span className="font-bold">{paymentType}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={OrderFinishedIllustration} alt="" className="" />
        </div>
      </div>
    </div>
  )
}
