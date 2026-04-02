import WelcomeCard from './components/ui/WelcomeCard'
import DueTodayCard from './components/ui/DueTodayCard'

function App() {
  const todayTasks = [
    { id: '1', title: 'Submit Thesis Draft', time: '5:00 PM', completed: false },
    { id: '2', title: 'Weekly Groceries', time: '7:00 PM', completed: false },
  ];

  return (
    <div style={{ padding: 40, display: 'flex', gap: 24, maxWidth: 1000 }}>
      <WelcomeCard username="Scholar" taskCount={12} />
      <DueTodayCard
        tasks={todayTasks}
        onComplete={(id) => console.log('complete', id)}
      />
    </div>
  )
}

export default App