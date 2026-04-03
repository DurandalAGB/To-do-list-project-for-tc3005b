import { styled } from '@mui/material/styles';
import Badge from '../Badge';

type ResultType = 'list' | 'task' | 'done';

interface SearchResultItemProps {
  type: ResultType;
  title: string;
  description?: string;      // para type='list'
  dueDate?: string;          // para type='task' y 'done'
  listName?: string;         // para type='task'
  completedDate?: string;    // para type='done'
  onClick?: () => void;
}

const Container = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  alignSelf: 'stretch',
  cursor: 'pointer',
  padding: '8px',
  borderRadius: '8px',
  '&:hover': {
    background: '#F3F4F8',
  },
});

const IconWrapper = styled('div')<{ bgColor: string }>(({ bgColor }) => ({
  display: 'flex',
  width: '40px',
  height: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: bgColor,
  flexShrink: 0,
}));

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  flex: '1 0 0',
});

const TitleRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
});

const Title = styled('span')<{ done: boolean }>(({ done }) => ({
  color: done ? '#727785' : '#191C23',
  fontFamily: 'Manrope, Georgia, serif',
  fontSize: '16px',
  fontWeight: done ? 500 : 700,
  lineHeight: '24px',
  textDecoration: done ? 'line-through' : 'none',
}));

const Description = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  alignSelf: 'left',
});

const MetaRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const MetaText = styled('span')({
  color: '#414754',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
});

const ListLink = styled('span')({
  color: '#005BBF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
});

const CompletedText = styled('span')({
  color: '#C1C6D6',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
});

const ListIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 10H10V8.33333H6.66667V10ZM6.66667 7.5H13.3333V5.83333H6.66667V7.5ZM6.66667 5H13.3333V3.33333H6.66667V5ZM5 13.3333C4.54167 13.3333 4.14931 13.1701 3.82292 12.8438C3.49653 12.5174 3.33333 12.125 3.33333 11.6667V1.66667C3.33333 1.20833 3.49653 0.815972 3.82292 0.489583C4.14931 0.163194 4.54167 0 5 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333H5ZM5 11.6667H15V1.66667H5V11.6667ZM1.66667 16.6667C1.20833 16.6667 0.815972 16.5035 0.489583 16.1771C0.163194 15.8507 0 15.4583 0 15V3.33333H1.66667V15H13.3333V16.6667H1.66667ZM5 1.66667V11.6667V1.66667Z" fill="#005BBF"/>
  </svg>
);

const TaskIcon = ({ done }: { done: boolean }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.23611 0 10.0903 0.131944 10.8958 0.395833C11.7014 0.659722 12.4444 1.02778 13.125 1.5L11.9167 2.72917C11.3889 2.39583 10.8264 2.13542 10.2292 1.94792C9.63194 1.76042 9 1.66667 8.33333 1.66667C6.48611 1.66667 4.91319 2.31597 3.61458 3.61458C2.31597 4.91319 1.66667 6.48611 1.66667 8.33333C1.66667 10.1806 2.31597 11.7535 3.61458 13.0521C4.91319 14.3507 6.48611 15 8.33333 15C10.1806 15 11.7535 14.3507 13.0521 13.0521C14.3507 11.7535 15 10.1806 15 8.33333C15 8.08333 14.9861 7.83333 14.9583 7.58333C14.9306 7.33333 14.8889 7.09028 14.8333 6.85417L16.1875 5.5C16.3403 5.94444 16.4583 6.40278 16.5417 6.875C16.625 7.34722 16.6667 7.83333 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667ZM7.16667 12.1667L3.625 8.625L4.79167 7.45833L7.16667 9.83333L15.5 1.47917L16.6667 2.64583L7.16667 12.1667Z" fill={done ? '#727785' : '#005320'}/>
  </svg>
);

const iconConfig: Record<ResultType, { bg: string }> = {
  list: { bg: '#D8E2FF' },
  task: { bg: '#89FA9B' },
  done: { bg: '#E0E2EC' },
};

const SearchResultItem = ({
  type,
  title,
  description,
  dueDate,
  listName,
  completedDate,
  onClick,
}: SearchResultItemProps) => {
  const isDone = type === 'done';

  return (
    <Container onClick={onClick}>
      <IconWrapper bgColor={iconConfig[type].bg}>
        {type === 'list'
          ? <ListIcon />
          : <TaskIcon done={isDone} />
        }
      </IconWrapper>

      <Content>
        <TitleRow>
          <Title done={isDone}>{title}</Title>
          <Badge variant="type" typeLabel={type} />
        </TitleRow>

        {type === 'list' && description && (
          <Description>{description}</Description>
        )}

        {type === 'task' && (
          <MetaRow>
            {dueDate && <MetaText>Due {dueDate} in</MetaText>}
            {listName && <ListLink>{listName}</ListLink>}
          </MetaRow>
        )}

        {type === 'done' && (
          <CompletedText>
            Completed {completedDate}
          </CompletedText>
        )}
      </Content>
    </Container>
  );
};

export default SearchResultItem;