import { styled } from '@mui/material/styles';

type BadgeVariant = 'priority' | 'type' | 'pill';
type PriorityLevel = 'low' | 'medium' | 'high';
type TypeLevel = 'list' | 'task' | 'done';

interface BadgeProps {
  variant: BadgeVariant;
  priority?: PriorityLevel;
  typeLabel?: TypeLevel;
  label?: string;
}

const PriorityBadge = styled('span')({
  display: 'inline-flex',
  padding: '2px 8px',
  borderRadius: '4px',
  background: '#B2C9FE',
  color: '#3D5481',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
});

const TypeBadge = styled('span')({
  display: 'inline-flex',
  padding: '2px 8px',
  borderRadius: '4px',
  background: '#E6E8F2',
  color: '#C1C6D6',
  fontFamily: 'Inter, sans-serif',
  fontSize: '10px',
  fontWeight: 700,
  lineHeight: '15px',
  textTransform: 'uppercase',
});

const PillBadge = styled('span')({
  display: 'inline-flex',
  padding: '6px 16px',
  borderRadius: '9999px',
  background: '#B2C9FE',
  color: '#3D5481',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
});

const priorityLabels: Record<PriorityLevel, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

const typeLabels: Record<TypeLevel, string> = {
  list: 'List',
  task: 'Task',
  done: 'Done',
};

const Badge = ({ variant, priority, typeLabel, label }: BadgeProps) => {
  if (variant === 'priority' && priority) {
    return <PriorityBadge>{priorityLabels[priority]}</PriorityBadge>;
  }

  if (variant === 'type' && typeLabel) {
    return <TypeBadge>{typeLabels[typeLabel]}</TypeBadge>;
  }

  if (variant === 'pill' && label) {
    return <PillBadge>{label}</PillBadge>;
  }

  return null;
};

export default Badge;