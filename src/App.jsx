import Hero from './components/Hero'
import ConfirmationCard from './components/ConfirmationCard'
import OrderSummary from './components/OrderSummary'
import ActionBar from './components/ActionBar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Hero />
      <ConfirmationCard />
      <OrderSummary />
      <ActionBar />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Aurora Store</footer>
    </div>
  )
}

export default App
