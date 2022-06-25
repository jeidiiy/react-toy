import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import { Invoice } from '../@types'
import { getInvoices } from '../data'

export default function Invoices() {
  let invoices: Invoice[] = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className="flex">
      <nav className="border-r p-4">
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
          placeholder="Add filter prefix..."
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter')
            if (!filter) return true
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'block mx-4 text-orange-600 ' : 'block mx-4'
              }
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}
