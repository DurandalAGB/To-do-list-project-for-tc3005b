import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskCard from '../../components/ui/TaskCard';
import ToggleCompleted from '../../components/ui/ToggleCompleted';
import CreateTaskForm from '../../components/ui/CreateTaskForm';
import DeleteTaskModal from '../../components/ui/DeleteTaskModal';
import EditTaskModal from '../../components/ui/EditTaskModal';

type Priority = 'low' | 'medium' | 'high';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  priority?: Priority;
  completed: boolean;
}

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Asymptotic Analysis Paper',
    description: 'Draft the first section covering Big O, Omega, and Theta notations.',
    dueDate: '2024-10-24',
    priority: 'high',
    completed: false,
  },
  {
    id: '2',
    title: 'Red-Black Tree Visualizer',
    description: 'Complete the insertion logic and rotation animations.',
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    priority: 'medium',
    completed: false,
  },
  {
    id: '3',
    title: 'Binary Search Implementation',
    description: 'Implement iterative and recursive versions.',
    completed: true,
  },
];

const MOCK_LIST = {
  title: 'Computer Science',
  description: 'Deep dive into data structures and algorithm analysis.',
};

const Tasks = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [showCompleted, setShowCompleted] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const selectedTask = tasks.find(t => t.id === selectedTaskId);

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter(t => !t.completed);

  const handleComplete = (taskId: string) => {
    setTasks(prev =>
      prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
    );
  };

  const handleEdit = (taskId: string) => {
    setSelectedTaskId(taskId);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (taskId: string) => {
    setSelectedTaskId(taskId);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setTasks(prev => prev.filter(t => t.id !== selectedTaskId));
    setDeleteModalOpen(false);
    setSelectedTaskId(null);
  };

  const handleSaveEdit = (data: {
    title: string;
    description: string;
    date: string;
    priority: Priority;
  }) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === selectedTaskId
          ? { ...t, title: data.title, description: data.description, dueDate: data.date, priority: data.priority }
          : t
      )
    );
    setEditModalOpen(false);
    setSelectedTaskId(null);
  };

  const handleCreateTask = (data: {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
  }) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      dueDate: data.dueDate || undefined,
      priority: data.priority,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F3F4F8',
      padding: '32px 24px',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Breadcrumb */}
        <p style={{
          color: '#005BBF',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          marginBottom: '8px',
        }}>
          {MOCK_LIST.title}
        </p>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <h1 style={{
              color: '#191C23',
              fontFamily: 'Georgia, serif',
              fontSize: '32px',
              fontWeight: 700,
              margin: 0,
              marginBottom: '4px',
            }}>
              {MOCK_LIST.title}
            </h1>
            <p style={{
              color: '#6B7280',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              margin: 0,
            }}>
              {MOCK_LIST.description}
            </p>
          </div>
          <ToggleCompleted
            showCompleted={showCompleted}
            onToggle={setShowCompleted}
          />
        </div>

        {/* Task List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '32px',
        }}>
          {visibleTasks.length === 0 ? (
            <p style={{
              color: '#6B7280',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              textAlign: 'center',
              padding: '32px',
            }}>
              No tasks to show
            </p>
          ) : (
            visibleTasks.map(task => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                priority={task.priority}
                completed={task.completed}
                onComplete={handleComplete}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
              />
            ))
          )}
        </div>

        {/* Create Task Form */}
        <CreateTaskForm onSubmit={handleCreateTask} />

      </div>

      {/* Delete Modal */}
      <DeleteTaskModal
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />

      {/* Edit Modal */}
      <EditTaskModal
        open={editModalOpen}
        initialTitle={selectedTask?.title}
        initialDescription={selectedTask?.description}
        initialDate={selectedTask?.dueDate}
        initialPriority={selectedTask?.priority}
        onCancel={() => setEditModalOpen(false)}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default Tasks;