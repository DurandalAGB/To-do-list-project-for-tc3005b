import { styled } from '@mui/material/styles';

type ProgressColor = '#005BBF' | '#006D2C' | '#475E8C' | '#BA1A1A' | '#7C4DFF' | '#FFAB40';

interface ProgressBarProps {
  value: number; // 0 a 100
  color: ProgressColor;
  showLabel?: boolean; // mostrar "65% COMPLETED" abajo
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  width: '100%',
});

const Track = styled('div')({
  width: '100%',
  height: '6px',
  borderRadius: '9999px',
  background: '#ECEDF7',
  overflow: 'hidden',
});

const Fill = styled('div')<{ fillcolor: string; value: number }>(({ fillcolor, value }) => ({
  height: '100%',
  width: `${value}%`,
  borderRadius: '9999px',
  background: fillcolor,
  transition: 'width 0.3s ease',
}));

const Label = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '10px',
  fontWeight: 700,
  lineHeight: '15px',
  textTransform: 'uppercase',
});

const ProgressBar = ({ value, color, showLabel = true }: ProgressBarProps) => {
  const clampedValue = Math.min(100, Math.max(0, value)); // asegura que sea entre 0 y 100

  return (
    <Container>
      <Track>
        <Fill fillcolor={color} value={clampedValue} />
      </Track>
      {showLabel && <Label>{clampedValue}% Completed</Label>}
    </Container>
  );
};

export default ProgressBar;