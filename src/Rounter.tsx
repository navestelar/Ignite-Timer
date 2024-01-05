import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { History } from './pages/History/index.tsx'
import { DefaultLayout } from './layout/DefaulltLayout/index.tsx'

export function Rounter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
