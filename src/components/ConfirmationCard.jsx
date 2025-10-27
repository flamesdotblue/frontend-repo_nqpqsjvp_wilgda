import { motion } from 'framer-motion'
import { CheckCircle2, CreditCard, Package, Truck } from 'lucide-react'

export default function ConfirmationCard() {
  return (
    <section className="relative -mt-20 pb-4">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden"
        >
          <div className="relative p-8 md:p-10">
            <div className="absolute right-6 top-6 text-emerald-500/20">
              <CheckCircle2 className="h-16 w-16" />
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Your order is confirmed</h2>
                <p className="mt-1 text-slate-600">We're getting your order ready. You'll receive an update when it ships.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="flex items-center gap-3 p-4">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-700">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Payment</p>
                  <p className="font-medium text-slate-800">Paid securely</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-700">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Status</p>
                  <p className="font-medium text-slate-800">Preparing items</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-700">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Delivery</p>
                  <p className="font-medium text-slate-800">2-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500" />
        </motion.div>
      </div>
    </section>
  )
}
