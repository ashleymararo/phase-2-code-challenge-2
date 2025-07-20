import React, { useState } from "react";

function GoalCard({ goal, onUpdate, onDelete }) {
const [deposit, setDeposit] = useState("");

const handleDeposit = () => {
    const newSavedAmount = goal.savedAmount + Number(deposit);

    fetch(`https://backendapi-p2-cc2.onrender.com/goals/${goal.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ savedAmount: newSavedAmount }),
    })
    .then((res) => res.json())
    .then((updatedGoal) => {
        onUpdate(updatedGoal);
        setDeposit("");
    });
};

const handleDelete = () => {
    fetch(`https://backendapi-p2-cc2.onrender.com/goals/${goal.id}`, {
    method: "DELETE",
    }).then(() => {
    onDelete(goal.id);
    });
};

const progressPercent = Math.min(
    (goal.savedAmount / goal.targetAmount) * 100,
    100
).toFixed(0);

const remaining = goal.targetAmount - goal.savedAmount;

return (
    <div className="goal-card">
    <h2>{goal.name}</h2>
    <p>Category: {goal.category}</p>
    <p>Target: ${goal.targetAmount}</p>
    <p>Saved: ${goal.savedAmount}</p>
    <p>Remaining: ${remaining}</p>
    <progress value={goal.savedAmount} max={goal.targetAmount}></progress>
    <p>{progressPercent}% complete</p>
    <p>Deadline: {goal.deadline}</p>

    <input
        type="number"
        placeholder="Deposit amount"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
    />
    <button onClick={handleDeposit}>Deposit</button>
    <button onClick={handleDelete}>Delete</button>
    </div>
);
}


export default GoalCard;
