import { useEffect, useState } from "react";
import GoalCard from "./components/GoalCard";
import AddGoalForm from "./components/AddGoalForm";
import './App.css'

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://backendapi-p2-cc2.onrender.com/goals")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched goals:", data);
        setGoals(data);
      })
      .catch((error) => console.error("Failed to fetch goals:", error));
  }, []);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  const handleUpdateGoal = (updatedGoal) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  };

  const handleDeleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <AddGoalForm onAddGoal={handleAddGoal} />
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdate={handleUpdateGoal}
          onDelete={handleDeleteGoal}
        />
      ))}
    </div>
  );
}

export default App;
