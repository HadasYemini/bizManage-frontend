import React from 'react';

export default function TaskCard({ task }) {
  const getBorderColor = () => {
    switch (task.type.toLowerCase()) {
      case 'open':
        return 'border-blue-500';
      case 'inprogress':
        return 'border-yellow-500';
      case 'onhold':
        return 'border-red-500';
      case 'done':
        return 'border-green-500';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 mb-6 border-l-4 ${getBorderColor()}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{task.name}</h3>
      <div className="text-sm text-gray-700">
        <p className="mb-2">
          <span className="font-medium">ID:</span> {task.id}
        </p>
        <p className="mb-2">
          <span className="font-medium">Description:</span> {task.description}
        </p>
        <p className="mb-2">
          <span className="font-medium">Assigned To:</span> {task.assignTo}
        </p>
        <p className="mb-2">
          <span className="font-medium">Due Date:</span> {task.dueDate}
        </p>
        <p className="mb-2">
          <span className="font-medium">Estimate:</span> {task.estimate}
        </p>
        <p>
          <span className="font-medium">Section:</span> {task.section}
        </p>
      </div>
    </div>
  );
}
