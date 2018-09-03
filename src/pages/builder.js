import React from 'react';

import { withApollo } from 'react-apollo';
import { stackQuery } from '../lib/graphql/queries';

import styled from 'styled-components';

import Title from '../components/Title';
import Search from '../containers/builder/search';
import Results from '../containers/builder/results';
import SelectedPackages from '../containers/builder/selectedPackages';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

const StyledTitle = styled(Title)`
  max-width: 830px;
`;

const SearchAndResultsSection = styled.div`
  width: 100%;
  max-width: 900px;
`;

class Builder extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      selectedPackages: [],
      loading: false
    };

    this.handleQueryOnChange = this.handleQueryOnChange.bind(this);
    this.handleResultsOnSelect = this.handleResultsOnSelect.bind(this);
    this.handleStackOnSelect = this.handleStackOnSelect.bind(this);
  }

  async componentDidMount() {
    const {
      client,
      match: {
        params: { id }
      }
    } = this.props;

    if (id) {
      this.setState({
        loading: true
      });

      const { data } = await client.query({
        query: stackQuery,
        variables: { id }
      });

      this.setState({
        selectedPackages: data.stack ? data.stack.stack.dependencies : [],
        loading: false
      });
    }
  }

  handleQueryOnChange(query) {
    this.setState({
      query
    });
  }

  handleResultsOnSelect(pkg, dev) {
    const { selectedPackages } = this.state;

    if (selectedPackages.length !== 0) {
      this.selectedPackages.clearMsg();
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

    this.selectedPackages.clearMsg();

    const newSelectedPackages = selectedPackages.filter(
      myPackage =>
        myPackage.name !== pkg.name || myPackage.version !== pkg.version
    );

    this.setState({
      selectedPackages: newSelectedPackages
    });
  }

  render() {
    const { query, selectedPackages, loading } = this.state;

    return (
      <Wrapper>
        <StyledTitle
          title={'Build a stack.'}
          subtitle={
            '🥞 A tool for building an npm stack. 🎯Suggestions are packages that best suit your existing stack. To add a developer dependency press 💻.'
          }
        />
        <Content>
          <SearchAndResultsSection>
            <Search
              value={query}
              onChange={this.handleQueryOnChange}
              ref={search => {
                this.search = search;
              }}
            />
            <Results
              query={query}
              selectedPackages={selectedPackages}
              onSelect={this.handleResultsOnSelect}
            />
          </SearchAndResultsSection>
          <SelectedPackages
            selectedPackages={selectedPackages}
            onSelect={this.handleStackOnSelect}
            loading={loading}
            ref={selectedPackages => {
              this.selectedPackages = selectedPackages;
            }}
          />
        </Content>
      </Wrapper>
    );
  }
}

export default withApollo(Builder);
