import { useParams } from 'react-router-dom'
import { getInvoice } from '../data'

export default function Invoice() {
  let params = useParams()
  const invoiceId = params.invoiceId!
  let invoice = getInvoice(parseInt(invoiceId, 10))
  return (
    <main className="p-4">
      <h2>Total due: {invoice?.due}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  )
}
