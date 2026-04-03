import { useState } from 'react';
import { styled } from '@mui/material/styles';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  showResults?: boolean; // booleano para mostrar/ocultar la sección de resultados
  resultCount?: number;
  placeholder?: string;
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
});

const InputWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
});

const SearchIconWrapper = styled('div')({
  position: 'absolute',
  left: '20px',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
});

const ClearButton = styled('button')({
  position: 'absolute',
  right: '20px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
  borderRadius: '4px',
  '&:hover': {
    background: '#F3F4F8',
  },
});

const Input = styled('input')({
  display: 'flex',
  padding: '16px 48px 16px 56px',
  justifyContent: 'center',
  alignSelf: 'stretch',
  width: '100%',
  borderRadius: '12px',
  border: '1px solid #C1C6D6',
  background: '#FFF',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '28px',
  boxSizing: 'border-box',
  outline: 'none',
  '&:focus': {
    borderColor: '#005BBF',
    boxShadow: '0 0 0 3px rgba(0,91,191,0.1)',
  },
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const ResultsRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
});

const ResultText = styled('span')({
  color: '#727785',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
});

const QueryText = styled('span')({
  color: '#191C23',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
});

const Dot = styled('div')({
  width: '4px',
  height: '4px',
  borderRadius: '9999px',
  background: '#C1C6D6',
  flexShrink: 0,
});

const MatchesText = styled('span')({
  color: '#005BBF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
});

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#727785"/>
  </svg>
);

const ClearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#727785"/>
  </svg>
);

const SearchBar = ({
  value,
  onChange,
  onClear,
  showResults = false,
  resultCount = 0,
  placeholder = 'Search...',
}: SearchBarProps) => {
  return (
    <Container>
      <InputWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {value && (
          <ClearButton onClick={onClear}>
            <ClearIcon />
          </ClearButton>
        )}
      </InputWrapper>

      {showResults && value && (
        <ResultsRow>
          <ResultText>
            Search results for <QueryText>"{value}"</QueryText>
          </ResultText>
          <Dot />
          <MatchesText>{resultCount} matches found</MatchesText>
        </ResultsRow>
      )}
    </Container>
  );
};

export default SearchBar;