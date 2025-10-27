import { motion } from 'framer-motion'
import { ArrowRight, Download, Share2, Truck } from 'lucide-react'

export default function ActionBar() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-slate-900 text-white p-5"
        >
          <div>
            <p className="text-sm text-slate-300">Next steps</p>
            <h4 className="text-lg font-semibold">Track your delivery or download your receipt</h4>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:bg-slate-50">
              <Truck className="h-4 w-4" />
              Track order
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium shadow hover:bg-emerald-400">
              <Download className="h-4 w-4" />
              Receipt
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 font-medium hover:bg-slate-700">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
