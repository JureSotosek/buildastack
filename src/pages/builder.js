import React from 'react';

import { Query } from 'react-apollo';
import { stackQuery } from '../lib/graphql/queries';

import styled from 'styled-components';

import Title from '../components/Title';
import Search from '../containers/builder/search';
import Results from '../containers/builder/results';
import SelectedPackages from '../containers/builder/selectedPackages';

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
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

const SearchResultsSection = styled.div`
  width: 100%;
  max-width: 900px;
`;

class Builder extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      selectedPackages: [],
      loadingStack: false
    };

    this.handleQueryOnCompleted = this.handleQueryOnCompleted.bind(this);
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleResultsOnSelect = this.handleResultsOnSelect.bind(this);
    this.handleStackOnSelect = this.handleStackOnSelect.bind(this);
  }

  handleQueryOnCompleted(data) {
    if (data.stack) {
      this.setState({
        selectedPackages: data.stack.dependencies
      });
    }
  }

  handleSearchOnChange(query) {
    this.setState({
      query
    });
  }

  handleResultsOnSelect(pkg, dev) {
    const { selectedPackages } = this.state;

    if (selectedPackages.length !== 0) {
      this.selectedPackages.setCoppiedNot();
    }

    if (
      !selectedPackages.some(
        myPackage =>
          myPackage.name === pkg.name && myPackage.version === pkg.version
      )
    ) {
      this.setState({
        selectedPackages: [...selectedPackages, { ...pkg, dev }],
        query: ''
      });
    }
    this.search.focus();
  }

  handleStackOnSelect(pkg) {
    const { selectedPackages } = this.state;

    this.selectedPackages.setCoppiedNot();

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
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query
        query={stackQuery}
        skip={!id}
        variables={{ id }}
        onCompleted={this.handleQueryOnCompleted}
        fetchPolicy={'network-only'} //TODO
      >
        {({ loading }) => (
          <Wrapper>
            <Title
              title={'Build a stack.'}
              subtitle={
                '🥞 A tool for building an npm stack. 🎯Suggestions are packages that best suit your existing stack. To add a developer dependency press 💻.'
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
              <SelectedPackages
                selectedPackages={selectedPackages}
                onSelect={this.handleStackOnSelect}
                loading={loading && id}
                ref={selectedPackages => {
                  this.selectedPackages = selectedPackages;
                }}
              />
            </Content>
          </Wrapper>
        )}
      </Query>
    );
  }
}

export default Builder;
