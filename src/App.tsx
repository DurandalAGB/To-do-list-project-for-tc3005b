import AboutProjectCard from './components/ui/AboutProjectCard'
import AuthorCard from './components/ui/AuthorCard'
import QuickStatsCard from './components/ui/QuickStatsCard'

function App() {
  return (
    <div style={{ padding: 40, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, maxWidth: 1100 }}>
      <AboutProjectCard
        description="Scholarly Atelier is more than just a task manager; it is an educational endeavor built to explore the boundaries of modern frontend development."
        quote="An educational todo application designed as a practical playground for mastering React's component-based architecture and state management."
        secondParagraph="By blending the focused environment of a private library with contemporary web technologies, this project demonstrates how aesthetic design and functional logic can coexist harmoniously."
        pills={['React 18', 'Tailwind CSS', 'Component-Driven Design']}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <AuthorCard
          name="Angel Bosquez"
          role="Software Engineer Student"
        />
        <QuickStatsCard
          stats={[
            { icon: 'H', label: 'Favorite anime', value: 'JJK ' },
            { icon: 'L', label: 'Hobbies', value: 'Nothing lmao' },
          ]}
        />
      </div>
    </div>
  )
}

export default App