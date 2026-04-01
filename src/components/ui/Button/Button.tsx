import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type ButtonVariant = 'primary' | 'secondary' | 'cancel' | 'delete' | 'pill';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, object> = {
  primary: {
    background: '#005BBF',
    color: '#FFFFFF',
    fontWeight: 700,
    boxShadow: '0 10px 15px -3px rgba(0,91,191,0.20)',
    '&:hover': {
      background: '#0051AA',
    },
  },
  secondary: {
    background: 'transparent',
    color: '#005BBF',
    fontWeight: 700,
    border: '2px solid #005BBF',
    '&:hover': {
      background: 'rgba(0,91,191,0.05)',
    },
  },
  cancel: {
    background: '#E6E8F2',
    color: '#3D5481',
    fontWeight: 700,
    '&:hover': {
      background: '#D8DBE8',
    },
  },
  delete: {
    background: '#BA1A1A',
    color: '#FFFFFF',
    fontWeight: 600,
    boxShadow: '0 10px 15px -3px rgba(186,26,26,0.20)',
    '&:hover': {
      background: '#A01717',
    },
  },
  pill: {
    background: '#E0E2EC',
    color: '#414754',
    fontWeight: 700,
    borderRadius: '9999px',
    fontSize: '14px',
    padding: '6px 20px',
    '&:hover': {
      background: '#D0D2DC',
    },
  },
};

const StyledButton = styled(MuiButton)<{ customvariant: ButtonVariant }>(
  ({ customvariant }) => ({
    fontFamily: 'Inter, Roboto, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: '12px',
    padding: '12px 24px',
    textTransform: 'none',
    boxShadow: 'none',
    ...variantStyles[customvariant],
    '&.MuiButton-root': {
      ...variantStyles[customvariant],
    },
  })
);

const Button = ({ variant = 'primary', children, fullWidth, ...props }: ButtonProps) => {
  return (
    <StyledButton
      customvariant={variant}
      variant="contained"
      fullWidth={fullWidth}
      disableElevation
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;