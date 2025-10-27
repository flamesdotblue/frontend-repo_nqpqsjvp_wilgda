import { motion } from 'framer-motion'

const items = [
  {
    name: 'Aurora Wireless Headphones',
    color: 'Matte Black',
    qty: 1,
    price: 129.0,
    image: 'https://images.unsplash.com/photo-1712369448819-2ca1105339cf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBXaXJlbGVzcyUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MTU3NTQ0NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Neon Smart Wallet',
    color: 'Cobalt Blue',
    qty: 1,
    price: 59.0,
    image: 'https://images.unsplash.com/photo-1656766109398-452c014c8610?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwU21hcnQlMjBXYWxsZXR8ZW58MHwwfHx8MTc2MTU3NTQ0Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

const format = (n) => `$${n.toFixed(2)}`

export default function OrderSummary() {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const shipping = 0
  const tax = Math.round(subtotal * 0.08 * 100) / 100
  const total = subtotal + shipping + tax

  return (
    <section className="py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-6"
        >
          <h3 className="text-lg font-semibold text-slate-900">Order summary</h3>
          <div className="mt-4 divide-y divide-slate-100">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.color}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-900">{format(item.price)}</p>
                  <p className="text-sm text-slate-500">Qty: {item.qty}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-6 h-fit"
        >
          <h3 className="text-lg font-semibold text-slate-900">Payment details</h3>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">Subtotal</dt>
              <dd className="font-medium text-slate-900">{format(subtotal)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">Shipping</dt>
              <dd className="font-medium text-emerald-600">Free</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-600">Tax</dt>
              <dd className="font-medium text-slate-900">{format(tax)}</dd>
            </div>
            <div className="my-3 h-px bg-slate-200" />
            <div className="flex items-center justify-between text-base">
              <dt className="text-slate-700">Total</dt>
              <dd className="font-semibold text-slate-900">{format(total)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-slate-500">Order ID: #AUR-5931-XY</p>
        </motion.aside>
      </div>
    </section>
  )
}
