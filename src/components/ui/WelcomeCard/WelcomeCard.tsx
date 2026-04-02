import { styled } from '@mui/material/styles';

interface WelcomeCardProps {
  username: string;
  taskCount: number;
}

const Card = styled('div')({
  display: 'flex',
  padding: '24px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  borderRadius: '16px',
  border: '1px solid #C1C6D6',
  background: '#FFF',
});

const Title = styled('span')({
  color: '#191C23',
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  alignSelf: 'stretch',
  textAlign: 'left',
});

const Subtitle = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  alignSelf: 'stretch',
  textAlign: 'left',
});

const WelcomeCard = ({ username, taskCount }: WelcomeCardProps) => {
  return (
    <Card>
      <Title>Welcome back, {username}</Title>
      <Subtitle>
        You have {taskCount} tasks scheduled for today. Here's a quick overview of your progress.
      </Subtitle>
    </Card>
  );
};

export default WelcomeCard;