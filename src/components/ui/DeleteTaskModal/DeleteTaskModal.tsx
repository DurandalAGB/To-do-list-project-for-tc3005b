import { styled } from '@mui/material/styles';
import Button from '../Button';

interface DeleteTaskModalProps {
  open: boolean;
  taskTitle?: string;
  onCancel: () => void;
  onConfirm: () => void;
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
  display: 'flex',
  width: '448px',
  maxWidth: '448px',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  background: '#FFF',
  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
  flexShrink: 0,
});

const Header = styled('div')({
  display: 'flex',
  padding: '32px 32px 16px 32px',
  alignItems: 'center',
  gap: '12px',
  alignSelf: 'stretch',
});

const IconCircle = styled('div')({
  display: 'flex',
  width: '40px',
  height: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '9999px',
  background: '#FFDAD6',
  flexShrink: 0,
});

const Title = styled('span')({
  color: '#191C23',
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  letterSpacing: '-0.6px',
});

const Body = styled('div')({
  padding: '0 32px',
  alignSelf: 'stretch',
});

const BodyText = styled('p')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '26px',
  margin: 0,
});

const Footer = styled('div')({
  display: 'flex',
  padding: '32px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '12px',
  alignSelf: 'stretch',
});

const TrashIcon = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#BA1A1A"/>
  </svg>
);

const DeleteTaskModal = ({ open, onCancel, onConfirm }: DeleteTaskModalProps) => {
  if (!open) return null;

  return (
    <Overlay onClick={onCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <IconCircle>
            <TrashIcon />
          </IconCircle>
          <Title>Delete Task</Title>
        </Header>
        <Body>
          <BodyText>
            Are you sure you want to delete this task? This action is permanent
            and cannot be undone. All associated notes and attachments will be lost.
          </BodyText>
        </Body>
        <Footer>
          <Button variant="cancel" fullWidth onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="delete" fullWidth onClick={onConfirm}>
            Delete
          </Button>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default DeleteTaskModal;