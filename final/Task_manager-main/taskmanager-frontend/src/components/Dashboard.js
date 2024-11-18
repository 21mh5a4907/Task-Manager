import React from 'react';

function Dashboard({ tasks }) {
    // Filter high priority tasks
    const highPriorityTasks = tasks.filter(task => task.priority === 'high');
    
    // Filter tasks by deadline (next 3 days)
    const nearDeadlineTasks = tasks.filter(task => {
        const deadline = new Date(task.deadline);
        const today = new Date();
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(today.getDate() + 3);
        return deadline <= threeDaysFromNow && deadline >= today;
    });

    // Get task statistics
    const taskStats = {
        total: tasks.length,
        completed: tasks.filter(task => task.status === 'completed').length,
        inProgress: tasks.filter(task => task.status === 'in-progress').length,
        onHold: tasks.filter(task => task.status === 'hold').length,
        yetToStart: tasks.filter(task => task.status === 'yet-to-start').length
    };

    return (
        <div className="bg-gray-100 h-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Total Tasks</h3>
                    <p className="text-3xl font-bold text-purple-600">{taskStats.total}</p>
                </div>
                <div className="bg-purple-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
                    <p className="text-3xl font-bold text-orange-600">{taskStats.completed}</p>
                </div>
                <div className="bg-rose-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">In Progress</h3>
                    <p className="text-3xl font-bold text-lime-600">{taskStats.inProgress}</p>
                </div>
                <div className="bg-orange-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">On Hold</h3>
                    <p className="text-3xl font-bold text-teal-600">{taskStats.onHold}</p>
                </div>
            </div>

            

                
            </div>
        
    );
}

export default Dashboard;