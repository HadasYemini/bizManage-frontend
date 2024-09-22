import React, { useState, useEffect } from 'react';
import { tasksDb } from '../constants/tasksDb';
import TaskCard from '../components/cards/TaskCard';
import { MdAddToPhotos, MdClose } from "react-icons/md";
import TaskNew from './TaskNew';

export default function Tasks() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [section, setSection] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  const groupedTasks = {
    open: filteredTasks.filter(task => task.type.toLowerCase() === 'open'),
    inProgress: filteredTasks.filter(task => task.type.toLowerCase() === 'inprogress'),
    onHold: filteredTasks.filter(task => task.type.toLowerCase() === 'onhold'),
    done: filteredTasks.filter(task => task.type.toLowerCase() === 'done'),
  };

  function filterTasks() {
    if (section === 'all') {
      setFilteredTasks(tasksDb);
    } else {
      setFilteredTasks(tasksDb.filter(task => task.section.toLowerCase() === section.toLowerCase()));
    }
  }

  useEffect(() => {
    filterTasks();
    console.log(' => ', filteredTasks, section);
    return () => {
      console.log('clear');
    };
  }, [section]);

  return (
    <div className="relative p-6 bg-gray-100 min-h-screen">
      <div id="tasksBar" className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-6">
        <button 
          onClick={() => setShowNewTask(true)}
          className="flex items-center text-blue-500 hover:text-blue-600 transition"
        >
          <MdAddToPhotos className="mr-2 h-8 w-8" />
          <span className="hidden md:inline">Add New Task</span>
        </button>
        <select 
          id="taskSection" 
          onChange={(e) => setSection(e.target.value)} 
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option disabled value="">Select Section</option>
          <option value="all">All tasks</option>
          <option value="CustomersManagement">Customers Management</option>
          <option value="DealsManagement">Deals Management</option>
          <option value="Reports">Reports</option>
          <option value="Support">Support</option>
          <option value="Account">Account</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {Object.entries(groupedTasks).map(([type, tasks]) => (
          <div key={type} className="flex-1 min-w-0 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 capitalize">{type}</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {showNewTask && (
         <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 rounded'>
              <TaskNew onClose={() => setShowNewTask(false)}/>
        </div>
      )}
    </div>
  );
}
