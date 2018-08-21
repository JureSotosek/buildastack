import React from 'react';

import styled from 'styled-components';

import Title from '../components/Title';
import Search from '../containers/stackBuilder/search';
import Results from '../containers/stackBuilder/results';
import Stack from '../containers/stackBuilder/stack';
import CommandButtons from '../containers/stackBuilder/commandButtons';

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

const StackSection = styled.div`
  margin-top: 60px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1px;
`;

const StackTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const CommandsTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
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

    if (selectedPackages.length !== 0) {
      this.commandButtons.setCoppiedNot();
    }

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

    this.commandButtons.setCoppiedNot();

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
          <StackSection>
            <StackTitle>{'Your stack:'}</StackTitle>
            <Stack
              selectedPackages={selectedPackages}
              onSelect={this.handleStackOnSelect}
            />
            {selectedPackages.length !== 0 && (
              <React.Fragment>
                <CommandsTitle>{'Install Commands:'}</CommandsTitle>
                <CommandButtons
                  selectedPackages={selectedPackages}
                  ref={commandButtons => {
                    this.commandButtons = commandButtons;
                  }}
                />
              </React.Fragment>
            )}
          </StackSection>
        </Content>
      </Wrapper>
    );
  }
}

export default StackBuilder;
