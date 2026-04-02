import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '../Button';

interface EditTaskModalProps {
  open: boolean;
  initialTitle?: string;
  initialDescription?: string;
  initialDate?: string;
  initialPriority?: 'low' | 'medium' | 'high';
  onCancel: () => void;
  onSave: (data: {
    title: string;
    description: string;
    date: string;
    priority: 'low' | 'medium' | 'high';
  }) => void;
}

const Overlay = styled('div')({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

const Modal = styled('div')({
  width: '512px',
  maxWidth: '512px',
  paddingBottom: '16px',
  borderRadius: '12px',
  border: '1px solid rgba(193,198,214,0.15)',
  background: '#FFF',
  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const Header = styled('div')({
  display: 'flex',
  padding: '24px 32px',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
  background: 'rgba(242,243,253,0.50)',
  borderRadius: '12px 12px 0 0',
});

const Title = styled('span')({
  color: '#191C23',
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  fontWeight: 800,
  lineHeight: '32px',
  letterSpacing: '-0.6px',
});

const CloseButton = styled('button')({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#414754',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
  borderRadius: '4px',
  '&:hover': {
    background: '#E6E8F2',
  },
});

const Form = styled('div')({
  display: 'flex',
  padding: '32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
});

const FieldSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8.5px',
  alignSelf: 'stretch',
});

const FieldLabel = styled('label')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
});

const Input = styled('input')({
  display: 'flex',
  padding: '16px',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '8px',
  background: '#E0E2EC',
  border: 'none',
  outline: 'none',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  boxSizing: 'border-box',
  '&:focus': {
    outline: '2px solid #005BBF',
  },
});

const TextArea = styled('textarea')({
  display: 'flex',
  height: '128px',
  padding: '16px',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '8px',
  background: '#E0E2EC',
  border: 'none',
  outline: 'none',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  boxSizing: 'border-box',
  resize: 'none',
  '&:focus': {
    outline: '2px solid #005BBF',
  },
});

const DatePriorityGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: '24px',
  alignSelf: 'stretch',
});

const Select = styled('select')({
  display: 'flex',
  padding: '16px',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '8px',
  background: '#E0E2EC',
  border: 'none',
  outline: 'none',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23414754' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
  paddingRight: '40px',
  '&:focus': {
    outline: '2px solid #005BBF',
  },
});

const ActionButtons = styled('div')({
  display: 'flex',
  paddingTop: '16px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '16px',
  alignSelf: 'stretch',
});

const ErrorText = styled('span')({
  color: '#BA1A1A',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
});

const EditTaskModal = ({
  open,
  initialTitle = '',
  initialDescription = '',
  initialDate = '',
  initialPriority = 'low',
  onCancel,
  onSave,
}: EditTaskModalProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [date, setDate] = useState(initialDate);
  const [priority, setPriority] = useState(initialPriority);
  const [errors, setErrors] = useState<{ title?: string; date?: string }>({});

  if (!open) return null;

  const validateDate = (value: string): boolean => {
    if (!value) return true; // fecha es opcional
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(value)) return false;
    const d = new Date(value);
    return d instanceof Date && !isNaN(d.getTime());
  };

  const handleSave = () => {
    const newErrors: { title?: string; date?: string } = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (date && !validateDate(date)) {
      newErrors.date = 'Invalid date format';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({ title, description, date, priority });
    setErrors({});
  };

  return (
    <Overlay onClick={onCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Edit Task</Title>
          <CloseButton onClick={onCancel}>✕</CloseButton>
        </Header>
        <Form>
          <FieldSection>
            <FieldLabel>Title *</FieldLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Thesis Research"
            />
            {errors.title && <ErrorText>{errors.title}</ErrorText>}
          </FieldSection>

          <FieldSection>
            <FieldLabel>Description</FieldLabel>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional notes about this task..."
            />
          </FieldSection>

          <DatePriorityGrid>
            <FieldSection>
              <FieldLabel>Date</FieldLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <ErrorText>{errors.date}</ErrorText>}
            </FieldSection>

            <FieldSection>
              <FieldLabel>Priority</FieldLabel>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </Select>
            </FieldSection>
          </DatePriorityGrid>

          <ActionButtons>
            <Button variant="cancel" onClick={onCancel}>Cancel</Button>
            <Button variant="primary" onClick={handleSave}>Save Changes</Button>
          </ActionButtons>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default EditTaskModal;