import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:8000/api/taks");
    setTasks(res.data);
  };

  const handleAddOrUpdate = async () => {
    if (!text.trim()) return;

    if (editingId) {
      await axios.put(`http://localhost:8000/api/taks/${editingId}`, { text });
      setEditingId(null);
    } else {
      await axios.post("http://localhost:8000/api/taks", { text });
    }

    setText("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/taks/${id}`);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setText(task.text);
    setEditingId(task._id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span className="text-gray-800">{task.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskApp;
