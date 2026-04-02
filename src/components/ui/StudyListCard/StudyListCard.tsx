import { styled } from '@mui/material/styles';
import ProgressBar from '../ProgressBar';

type ThemeColor = '#005BBF' | '#006D2C' | '#475E8C' | '#BA1A1A' | '#7C4DFF' | '#FFAB40';

interface StudyListCardProps {
  title: string;
  description: string;
  completedTasks: number;
  totalTasks: number;
  themeColor: ThemeColor;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Card = styled('div')({
  height: '183px',
  borderRadius: '16px',
  border: '1px solid #C1C6D6',
  background: '#FFF',
  padding: '16px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
});

const TopRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TaskCount = styled('span')<{ color: string }>(({ color }) => ({
  color,
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '20px',
}));

const IconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: '#ECEDF7',
});

const TextSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
});

const Title = styled('span')({
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
});

const Subtitle = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
});

const BottomSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const StudyListCard = ({
  title,
  description,
  totalTasks,
  completedTasks,
  themeColor,
  icon,
  onClick,
}: StudyListCardProps) => {
  const percentage = totalTasks > 0
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <Card onClick={onClick}>
      <TopRow>
        <IconWrapper>{icon}</IconWrapper>
        <TaskCount color={themeColor}>{totalTasks} Tasks</TaskCount>
      </TopRow>
      <TextSection>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </TextSection>
      <BottomSection>
        <ProgressBar value={percentage} color={themeColor} />
      </BottomSection>
    </Card>
  );
};

export default StudyListCard;