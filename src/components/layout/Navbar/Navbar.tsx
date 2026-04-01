import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const NavContainer = styled('nav')({
  display: 'flex',
  padding: '16px 24px',
  alignItems: 'center',
  gap: '32px',
  width: '100%',
  borderBottom: '1px solid rgba(193, 198, 214, 0.20)',
  background: '#FFF',
  boxSizing: 'border-box',
});

const Logo = styled('span')({
  color: '#005BBF',
  fontFamily: 'Georgia, serif', // fuente incluida, parecida a Manrope en peso
  fontSize: '20px',
  fontWeight: 800,
  lineHeight: '28px',
  letterSpacing: '-0.5px',
  whiteSpace: 'nowrap',
  width: '154.92px',
  cursor: 'pointer',
});

const NavLinks = styled('div')({
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
});

const StyledNavLink = styled(NavLink)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textDecoration: 'none',
  color: '#414754',
  fontWeight: 400,
  paddingBottom: '4px',
  borderBottom: '2px solid transparent',
  '&.active': {
    color: '#005BBF',
    fontWeight: 600,
    borderBottom: '2px solid #005BBF',
  },
});

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>Scholarly Atelier</Logo>
      <NavLinks>
        <StyledNavLink to="/">Dashboard</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
      </NavLinks>
      {/* avatar y búsqueda van aquí después */}
      <div style={{ width: '154.92px' }} /> 
    </NavContainer>
  );
};

export default Navbar;