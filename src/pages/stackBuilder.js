import React from 'react';

import styled from 'styled-components';

import Title from '../components/Title';
import Search from '../containers/stackBuilder/search';
import Results from '../containers/stackBuilder/results';
import Stack from '../containers/stackBuilder/stack';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Source Sans Pro;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;

const SearchResultsSection = styled.div`
  width: 100%;
  max-width: 900px;
`;

class StackBuilder extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      selectedPackages: []
    };

    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleResultsOnSelect = this.handleResultsOnSelect.bind(this);
    this.handleStackOnSelect = this.handleStackOnSelect.bind(this);
  }

  handleSearchOnChange(query) {
    this.setState({
      query
    });
  }

  handleResultsOnSelect(pkg) {
    const { selectedPackages } = this.state;

    if (
      !selectedPackages.some(
        myPackage =>
          myPackage.name === pkg.name && myPackage.version === pkg.version
      )
    ) {
      this.setState({
        selectedPackages: [...selectedPackages, pkg],
        query: ''
      });
    }
    this.search.focus();
  }

  handleStackOnSelect(pkg) {
    const { selectedPackages } = this.state;

    const newSelectedPackages = selectedPackages.filter(
      myPackage =>
        myPackage.name !== pkg.name || myPackage.version !== pkg.version
    );

    this.setState({
      selectedPackages: newSelectedPackages
    });
  }

  render() {
    const { query, selectedPackages } = this.state;

    return (
      <Wrapper>
        <Title
          title={'Build your stack.'}
          subtitle={
            'Suggestions are packages📦 that best suit your existing dependencies👇🏼'
          }
        />
        <Content>
          <SearchResultsSection>
            <Search
              value={query}
              onChange={this.handleSearchOnChange}
              ref={search => {
                this.search = search;
              }}
            />
            <Results
              query={query}
              selectedPackages={selectedPackages}
              onSelect={this.handleResultsOnSelect}
            />
          </SearchResultsSection>
          <Stack
            selectedPackages={selectedPackages}
            onSelect={this.handleStackOnSelect}
          />
        </Content>
      </Wrapper>
    );
  }
}

export default StackBuilder;
