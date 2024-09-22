import React, { useState, useEffect } from 'react'
import { leadsDb } from '../constants/leadsDb'
import LeadCard from '../components/cards/LeadCard'
import { useParams } from "react-router-dom";
import { MdAddToPhotos, MdClose } from "react-icons/md";
import LeadNew from './LeadNew';

export default function Leads({onClose}) {
  const [leads, setLeads] = useState(leadsDb)
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [showNewLead, setShowNewLead] = useState(false)
  const { stage } = useParams();

  function filterLeads() {
    console.log('leads => ', leads, stage)
    if (!stage || stage === 'all') {
      setFilteredLeads(leads);
    } else if (stage === 'Won') {
      setFilteredLeads(leads.filter((lead) => lead.stage === 'Won'));
    } else {
      setFilteredLeads(leads.filter((lead) => lead.stage !== 'Won'));
    }
  }

  useEffect(() => {
    filterLeads();
    console.log('filteredLeads => ', filteredLeads)
  }, [stage, leads]);

  return (
    <div>
      <div className="overflow-x-auto">
        <div id="dealsBar" className='p-4 flex'>
          <button onClick={() => setShowNewLead(true)}>
          <MdAddToPhotos className="mr-2 h-8 w-8" />
          </button>
        </div>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Deal Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Owner</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Stage</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Deal Value</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Contacts</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Expected Close Date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Close Probability</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Estimated profit</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </tbody>
        </table>

        {showNewLead &&
         <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 rounded'>
            <LeadNew onClose={() => setShowNewLead(false)} />
          </div>
        }

      </div>
    </div>
  )
}
