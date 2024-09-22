import React, { useState, useEffect } from 'react'
import { dealsDb } from '../constants/dealsDb'
import DealCard from '../components/cards/DealCard'
import { useParams } from "react-router-dom";
import { MdAddToPhotos, MdClose } from "react-icons/md";
import DealNew from './DealNew';

export default function Deals() {
  const [deals, setDeals] = useState(dealsDb)
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [showNewDeal, setShowNewDeal] = useState(false)
  const { status } = useParams();

  function filterDeals(filter) {
    if (!status || status === 'all' || filter === 'all') {
      setFilteredDeals(deals);
    } else if (status === 'Done' || filter === 'Done') {
      setFilteredDeals(deals.filter((deal) => deal.status === 'Done'));
    } else {
      setFilteredDeals(deals.filter((deal) => deal.status !== 'Done'));
    }
  }

  useEffect(() => {
    filterDeals();
  }, [status, deals]);

  return (
    <div>
      <div className="overflow-x-auto">
        <div id="dealsBar" className='p-4 flex'>
          <button onClick={() => setShowNewDeal(true)}>
          <MdAddToPhotos className="mr-2 h-8 w-8" />
          </button>
          {/* <select id="delalsSection" onChange={(e) => filterDeals(e.target.value)}>
          <option value="">Select Section</option>
          <option value="all">View all deals</option>
          <option value="Active">Active Deals</option>
          <option value="Done">Closed Deals</option>
        </select> */}

        </div>

        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Deal Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Owner</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Priority</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Timeline</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Contact</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}

            {/* {status === 'Done'  // status from url
              ? Deals
                .filter((deal) => deal.status === 'Done')
                .map((deal) => <DealCard key={deal.id} deal={deal} />)
              : Deals
                .filter((deal) => deal.status !== 'Done')
                .map((deal) => <DealCard key={deal.id} deal={deal} />)
                }  */}
          </tbody>
        </table>

        {showNewDeal &&
         <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 rounded'>
            <DealNew onClose={() => setShowNewDeal(false)}/>
          </div>
        }

      </div>
    </div>
  )
}
