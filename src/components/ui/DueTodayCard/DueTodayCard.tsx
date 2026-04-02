import { styled } from '@mui/material/styles';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface DueTodayTask {
  id: string;
  title: string;
  time: string;
  completed: boolean;
}

interface DueTodayCardProps {
  tasks: DueTodayTask[];
  onComplete: (id: string) => void;
}

const Card = styled('div')({
  display: 'flex',
  width: '320px',
  padding: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  flexShrink: 0,
  alignSelf: 'stretch',
  borderRadius: '16px',
  border: '1px solid #C1C6D6',
  background: '#FFF',
  boxSizing: 'border-box',
});

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
});

const HeaderTitle = styled('span')({
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
});

const PriorityLabel = styled('span')({
  color: '#BA1A1A',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
});

const TaskList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignSelf: 'stretch',
});

const TaskItem = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  alignSelf: 'stretch',
});

const CheckButton = styled('button')({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  marginTop: '2px',
});

const TaskInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const TaskTitle = styled('span')({
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
});

const TaskTime = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});



const DueTodayCard = ({ tasks, onComplete }: DueTodayCardProps) => {
  return (
    <Card>
      <Header>
        <HeaderTitle>Due Today</HeaderTitle>
        <PriorityLabel>High Priority</PriorityLabel>
      </Header>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <CheckButton onClick={() => onComplete(task.id)}>
              <RadioButtonUncheckedIcon sx={{ color: '#005BBF', width: 16, height: 16 }} />
            </CheckButton>
            <TaskInfo>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskTime>
                {task.time}
              </TaskTime>
            </TaskInfo>
          </TaskItem>
        ))}
      </TaskList>
    </Card>
  );
};

export default DueTodayCard;