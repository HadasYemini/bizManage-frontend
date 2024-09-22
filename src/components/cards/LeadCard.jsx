import React from 'react'

export default function LeadCard({lead}) {
  return (
    <tr key={lead.id} className="border-b hover:bg-gray-100">
      <td className="py-2 px-4">{lead.dealName}</td>
      <td className="py-2 px-4">{lead.owner}</td>
      <td className="py-2 px-4">{lead.stage}</td>
      <td className="py-2 px-4">{lead.dealValue}</td>
      <td className="py-2 px-4">{lead.contacts}</td>
      <td className="py-2 px-4">{lead.expectedCloseDate}</td>
      <td className="py-2 px-4">{lead.closeProbability}</td>
      <td className="py-2 px-4">{lead.estimatedProfit}</td>
    </tr>
  )
}
