import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderFinished } from './pages/OrderFinished'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderFinished" element={<OrderFinished />} />
      </Route>
      <Route path="*" element={<DefaultLayout />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
