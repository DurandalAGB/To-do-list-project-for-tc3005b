import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '../Button';

interface CreateTaskFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    dueDate: string;
    priority: 'low' | 'medium' | 'high';
  }) => void;
}

const Container = styled('div')({
  display: 'flex',
  padding: '23.5px 24px 40px 24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
  borderRadius: '16px',
  background: '#F2F3FD',
  boxSizing: 'border-box',
});

const Heading = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
});

const HeadingText = styled('span')({
  color: '#191C23',
  fontFamily: 'Georgia, serif',
  fontSize: '20px',
  fontWeight: 800,
  lineHeight: '28px',
});

const Form = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
});

const FieldSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  alignSelf: 'stretch',
});

const Label = styled('label')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '16px',
  textTransform: 'uppercase',
  paddingLeft: '4px',
});

const Input = styled('input')({
  display: 'flex',
  padding: '14px 16px',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #E0E2EC',
  background: '#FFF',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  boxSizing: 'border-box',
  outline: 'none',
  '&::placeholder': {
    color: '#6B7280',
  },
  '&:focus': {
    borderColor: '#005BBF',
    boxShadow: '0 0 0 3px rgba(0,91,191,0.1)',
  },
});

const TextArea = styled('textarea')({
  display: 'flex',
  padding: '12px 16px 60px 16px',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #E0E2EC',
  background: '#FFF',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  boxSizing: 'border-box',
  resize: 'none',
  outline: 'none',
  '&::placeholder': {
    color: '#6B7280',
  },
  '&:focus': {
    borderColor: '#005BBF',
    boxShadow: '0 0 0 3px rgba(0,91,191,0.1)',
  },
});

const DatePriorityGrid = styled('div')({
  display: 'inline-grid',
  rowGap: '16px',
  columnGap: '16px',
  alignSelf: 'stretch',
  gridTemplateRows: '70px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
});

const Select = styled('select')({
  display: 'flex',
  padding: '14px 16px',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #E0E2EC',
  background: '#FFF',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  boxSizing: 'border-box',
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23414754' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
  paddingRight: '40px',
  '&:focus': {
    borderColor: '#005BBF',
    boxShadow: '0 0 0 3px rgba(0,91,191,0.1)',
  },
});

const ErrorText = styled('span')({
  color: '#BA1A1A',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  paddingLeft: '4px',
});

const CreateTaskIcon = () => (
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.0833 0 12.1083 0.158333 13.075 0.475C14.0417 0.791667 14.9333 1.23333 15.75 1.8L14.3 3.275C13.6667 2.875 12.9917 2.5625 12.275 2.3375C11.5583 2.1125 10.8 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18C10.5333 18 11.05 17.95 11.55 17.85C12.05 17.75 12.5333 17.6083 13 17.425L14.5 18.95C13.8167 19.2833 13.1 19.5417 12.35 19.725C11.6 19.9083 10.8167 20 10 20ZM17 18V15H14V13H17V10H19V13H22V15H19V18H17ZM8.6 14.6L4.35 10.35L5.75 8.95L8.6 11.8L18.6 1.775L20 3.175L8.6 14.6Z" fill="#005BBF"/>
  </svg>
);

const CreateTaskForm = ({ onSubmit }: CreateTaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [errors, setErrors] = useState<{ title?: string }>({});

  const handleSubmit = () => {
    if (!title.trim()) {
      setErrors({ title: 'Task title is required' });
      return;
    }
    onSubmit({ title, description, dueDate, priority });
    setErrors({});
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
  };

  return (
    <Container>
      <Heading>
        <CreateTaskIcon />
        <HeadingText>Create New Task</HeadingText>
      </Heading>

      <Form>
        <FieldSection>
          <Label>Task Title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Study for finals"
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
        </FieldSection>

        <FieldSection>
          <Label>Description</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add more details about this task..."
          />
        </FieldSection>

        <DatePriorityGrid>
          <FieldSection>
            <Label>Due Date</Label>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </FieldSection>

          <FieldSection>
            <Label>Priority</Label>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
          </FieldSection>
        </DatePriorityGrid>

        <Button variant="primary" fullWidth onClick={handleSubmit}>
          ADD TO LIST
        </Button>
      </Form>
    </Container>
  );
};

export default CreateTaskForm;