import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '../Button';

interface CreateListModalProps {
  open: boolean;
  onCancel: () => void;
  onCreate: (data: {
    title: string;
    description: string;
    themeColor: string;
  }) => void;
}

const THEME_COLORS = [
  '#005BBF',
  '#006D2C',
  '#475E8C',
  '#7C4DFF',
  '#FF5252',
  '#FFAB40',
  '#00BFA5',
];

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
  padding: '32px 32px 48px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
});

const FieldSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
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
  padding: '14px 16px',
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
  '&::placeholder': {
    color: '#9CA3AF',
  },
  '&:focus': {
    outline: '2px solid #005BBF',
  },
});

const TextArea = styled('textarea')({
  display: 'flex',
  padding: '12px 16px 60px 16px',
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
  '&::placeholder': {
    color: '#9CA3AF',
  },
  '&:focus': {
    outline: '2px solid #005BBF',
  },
});

const ColorSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
});

const ColorGrid = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
});

const ColorCircle = styled('button')<{ color: string; selected: boolean }>(
  ({ color, selected }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '9999px',
    background: color,
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    flexShrink: 0,
    outline: selected ? `3px solid ${color}` : 'none',
    outlineOffset: '3px',
    boxShadow: selected ? '0 0 0 2px #FFF' : 'none',
    transition: 'all 0.15s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  })
);

const ActionButtons = styled('div')({
  display: 'flex',
  paddingTop: '16px',
  justifyContent: 'center',
  alignItems: 'flex-start',
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

const CreateListModal = ({ open, onCancel, onCreate }: CreateListModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState(THEME_COLORS[0]);
  const [errors, setErrors] = useState<{ title?: string }>({});

  if (!open) return null;

  const handleCreate = () => {
    if (!title.trim()) {
      setErrors({ title: 'Title is required' });
      return;
    }
    onCreate({ title, description, themeColor: selectedColor });
    setErrors({});
    setTitle('');
    setDescription('');
    setSelectedColor(THEME_COLORS[0]);
  };

  return (
    <Overlay onClick={onCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Create New List</Title>
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
              placeholder="Optional notes about this list..."
            />
          </FieldSection>

          <ColorSection>
            <FieldLabel>Theme Color</FieldLabel>
            <ColorGrid>
              {THEME_COLORS.map((color) => (
                <ColorCircle
                  key={color}
                  color={color}
                  selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </ColorGrid>
          </ColorSection>

          <ActionButtons>
            <Button variant="cancel" fullWidth onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" fullWidth onClick={handleCreate}>
              Create List
            </Button>
          </ActionButtons>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default CreateListModal;