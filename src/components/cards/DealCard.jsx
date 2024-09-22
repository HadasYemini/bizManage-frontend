import React from 'react'

export default function DealCard({deal}) {
  return (
    <>
       <tr key={deal.id} className="border-b hover:bg-gray-100">
          <td className="py-2 px-4">{deal.dealName}</td>
          <td className="py-2 px-4">{deal.owner}</td>
          <td className="py-2 px-4">{deal.priority}</td>
          <td className="py-2 px-4">{deal.timeline}</td>
          <td className="py-2 px-4">{deal.status}</td>
          <td className="py-2 px-4">{deal.contact}</td>
          <td className="py-2 px-4">{deal.paymentMethod}</td>
        </tr>
    </>
  )
}
