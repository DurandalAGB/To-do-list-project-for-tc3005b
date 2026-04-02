import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DueDate from '../DueDate';
import Badge from '../Badge';

type PriorityLevel = 'low' | 'medium' | 'high';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  priority?: PriorityLevel;
  completed: boolean;
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const Card = styled('div')<{ completed: boolean }>(({ completed }) => ({
  display: 'flex',
  padding: '20px',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
  borderRadius: '12px',
  border: '1px solid #E0E2EC',
  background: completed ? '#F3F4F8' : '#FFF',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  boxSizing: 'border-box',
  width: '100%',
}));

const CheckButton = styled('button')({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  marginTop: '2px',
});

const ContentSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  flex: '1 0 0',
});

const Title = styled('span')<{ completed: boolean }>(({ completed }) => ({
  color: completed ? '#9CA3AF' : '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '28px',
  textDecoration: completed ? 'line-through' : 'none',
}));

const Description = styled('span')<{ completed: boolean }>(({ completed }) => ({
  color: completed ? '#9CA3AF' : '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  alignSelf: 'stretch',
  textAlign: 'left',
  textDecoration: completed ? 'line-through' : 'none',
}));

const Footer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginTop: '8px',
});

const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexShrink: 0,
});

const IconButton = styled('button')({
  background: 'none',
  border: 'none',
  padding: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  color: '#6B7280',
  '&:hover': {
    background: '#F3F4F8',
    color: '#191C23',
  },
});

const TaskCard = ({
  id,
  title,
  description,
  dueDate,
  priority,
  completed,
  onComplete,
  onEdit,
  onDelete,
}: TaskCardProps) => {
  return (
    <Card completed={completed}>
      <CheckButton onClick={() => onComplete(id)}>
        {completed
          ? <CheckCircleIcon sx={{ color: '#22C55E', width: 20, height: 20 }} />
          : <RadioButtonUncheckedIcon sx={{ color: '#C1C6D6', width: 20, height: 20 }} />
        }
      </CheckButton>

      <ContentSection>
        <Title completed={completed}>{title}</Title>
        <Description completed={completed}>{description}</Description>
        {(dueDate || priority) && (
          <Footer>
            {dueDate && <DueDate date={dueDate} />}
            {priority && <Badge variant="priority" priority={priority} />}
          </Footer>
        )}
      </ContentSection>

      <Actions>
        {!completed && (
          <IconButton onClick={() => onEdit(id)}>
            <EditIcon sx={{ width: 16, height: 16 }} />
          </IconButton>
        )}
        <IconButton onClick={() => onDelete(id)}>
          <DeleteIcon sx={{ width: 14, height: 15 }} />
        </IconButton>
      </Actions>
    </Card>
  );
};

export default TaskCard;