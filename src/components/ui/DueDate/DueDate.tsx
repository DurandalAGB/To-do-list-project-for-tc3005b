import { styled } from '@mui/material/styles';

interface DueDateProps {
  date: string; // fecha en formato ISO: "2024-10-24"
}

// --- Estilos base compartidos ---
const DateText = styled('span')<{ textcolor: string }>(({ textcolor }) => ({
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  color: textcolor,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
}));

// --- Lógica para calcular qué mostrar ---
const getDueDateInfo = (dateString: string): { label: string; color: string } => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // ignoramos la hora, solo nos importa el día

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dueDate = new Date(dateString);
  dueDate.setHours(0, 0, 0, 0);

  if (dueDate < today) {
    return { label: 'Overdue', color: '#BA1A1A' };
  }

  if (dueDate.getTime() === today.getTime()) {
    return { label: 'Due today', color: '#F59E0B' };
  }

  if (dueDate.getTime() === tomorrow.getTime()) {
    return { label: 'Due tomorrow', color: '#414754' };
  }

  // cualquier otra fecha: formato "Oct 24"
  const formatted = dueDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return { label: formatted, color: '#005BBF' };
};

// --- Componente ---
const DueDate = ({ date }: DueDateProps) => {
  const { label, color } = getDueDateInfo(date);

  return (
    <DateText textcolor={color}>
      🗓 {label}
    </DateText>
  );
};

export default DueDate;