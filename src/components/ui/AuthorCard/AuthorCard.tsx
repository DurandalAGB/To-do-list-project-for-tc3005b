import { styled } from '@mui/material/styles';

interface AuthorCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

const Card = styled('div')({
  display: 'flex',
  padding: '32px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  borderRadius: '16px',
  border: '1px solid #C1C6D6',
  background: '#FFF',
  boxSizing: 'border-box',
});

const Avatar = styled('img')({
  width: '80px',
  height: '80px',
  borderRadius: '9999px',
  objectFit: 'cover',
});

const AvatarPlaceholder = styled('div')({
  width: '80px',
  height: '80px',
  borderRadius: '9999px',
  background: '#E0E2EC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '32px',
});

const Name = styled('span')({
  color: '#191C23',
  textAlign: 'center',
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  letterSpacing: '-0.6px',
});

const Role = styled('span')({
  color: '#005BBF',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
});

const AuthorCard = ({ name, role, avatarUrl }: AuthorCardProps) => {
  return (
    <Card>
      {avatarUrl
        ? <Avatar src={avatarUrl} alt={name} />
        : <AvatarPlaceholder>AB</AvatarPlaceholder>
      }
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Card>
  );
};

export default AuthorCard;