import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { History } from './pages/History/index.tsx'
import { DefaultLayout } from './layout/DefaulltLayout/index.tsx'
import Error404 from './pages/error/Error404.tsx'

export function Rounter() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />

      <Route path="/Ignite-Timer" element={<DefaultLayout />}>
        <Route path="/Ignite-Timer/" element={<Home />} />
        <Route path="/Ignite-Timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
