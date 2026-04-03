import { styled } from '@mui/material/styles';

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface QuickStatsCardProps {
  stats: StatItem[];
}

const Card = styled('div')({
  display: 'flex',
  padding: '32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  borderRadius: '12px',
  background: '#FFF',
  border: '1px solid #C1C6D6',
  boxSizing: 'border-box',
});

const Heading = styled('span')({
  color: '#414754',
  fontFamily: 'Georgia, serif',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '20px',
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  alignSelf: 'stretch',
});

const List = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
});

const Item = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
});

const IconWrapper = styled('div')({
  paddingTop: '4px',
  flexShrink: 0,
});

const ItemContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ItemLabel = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '16px',
  letterSpacing: '-0.6px',
  textTransform: 'uppercase',
});

const ItemValue = styled('span')({
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
});

const QuickStatsCard = ({ stats }: QuickStatsCardProps) => {
  return (
    <Card>
      <Heading>Quick Stats</Heading>
      <List>
        {stats.map((stat, index) => (
          <Item key={index}>
            <IconWrapper>{stat.icon}</IconWrapper>
            <ItemContent>
              <ItemLabel>{stat.label}</ItemLabel>
              <ItemValue>{stat.value}</ItemValue>
            </ItemContent>
          </Item>
        ))}
      </List>
    </Card>
  );
};

export default QuickStatsCard;