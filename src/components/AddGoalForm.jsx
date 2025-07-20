import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
    ...formData,
    targetAmount: Number(formData.targetAmount),
    savedAmount: 0,
    createdAt: new Date().toISOString().split("T")[0],
    };

    fetch("https://backendapi-p2-cc2.onrender.com/goals", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newGoal),
    })
    .then((res) => res.json())
    .then((data) => {
        onAddGoal(data);
        setFormData({
        name: "",
        category: "",
        targetAmount: "",
        deadline: "",
        });
    });
};

return (
    <form className="add-goal-form" onSubmit={handleSubmit}>
    <h3>Add New Goal</h3>
    <input
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
    />
    <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
    />
    <input
        name="targetAmount"
        type="number"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
    />
    <input
        name="deadline"
        type="date"
        value={formData.deadline}
        onChange={handleChange}
    />
    <button type="submit">Add Goal</button>
    </form>
);
}

export default AddGoalForm;
