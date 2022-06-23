import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { SectionIds } from '../constants';

const SearchResultMapping = {
  CONTACTME: { message: 'ABOUT ME', href: `#${SectionIds.ABOUT}` },
  PORTFOLIO: { message: 'PORTFOLIO', href: `#${SectionIds.PROJECT}` },
  HITHERE: { message: 'HI THERE', href: `#${SectionIds.CONTACT}` }
};

const Container = styled.div`
  height: 100vh;
  max-width: 50%;
  width: 500px;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  margin-top: 200px;
  border: 1px solid black;
  background: white;
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  justify-content: space-between;
  padding: 5px;
`;

const SearchQuery = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 241, 241);
`;

const SearchResult = styled.a`
  padding: 2px 5px;
  color: black;
  &:hover {
    background: rgb(220, 220, 220);
    color: black;
  }
`;

function SearchBar(props) {
  const [searchQuery] = useState('UI/UX-OPTIMISED WEB APPS');
  return (
    <Container {...props}>
      <SearchBarContainer>
        <SearchContainer>
          <SearchQuery>{searchQuery}</SearchQuery>
          <SearchOutlined />
        </SearchContainer>
        <SearchResultContainer>
          {Object.keys(SearchResultMapping).map((key) => (
            <SearchResult href={SearchResultMapping[key].href}>
              {SearchResultMapping[key].message}
            </SearchResult>
          ))}
        </SearchResultContainer>
      </SearchBarContainer>
    </Container>
  );
}

export default SearchBar;
