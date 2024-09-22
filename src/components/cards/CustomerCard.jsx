import React from 'react'

export default function CustomerCard({customer}) {
  return (
    <>
       <tr key={customer.id} className="border-b hover:bg-gray-100">
          <td className="py-2 px-4">{customer.fullName}</td>
          <td className="py-2 px-4">{customer.age}</td>
          <td className="py-2 px-4">{customer.gender}</td>
          <td className="py-2 px-4">{customer.geographicalLocation}</td>
          <td className="py-2 px-4">{customer.phone}</td>
          <td className="py-2 px-4">{customer.email}</td>
          <td className="py-2 px-4">{customer.communicationPreferences}</td>
        </tr>
    </>
  )
}

