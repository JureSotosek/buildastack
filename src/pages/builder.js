import React from 'react';

import { withApollo } from 'react-apollo';
import { stackQuery } from '../lib/graphql/queries';

import styled from 'styled-components';

import Title from '../components/Title';
import Search from '../containers/builder/search';
import Dependencies from '../containers/builder/dependencies';
import Results from '../containers/builder/results';
import Suggestions from '../containers/builder/suggestions';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  padding-top: 40px;

  display: grid;
  grid-gap: 20px;

  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'dependencies'
    'search'
    'results'
    'suggestions';

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title title'
      'dependencies dependencies'
      'search search'
      'results suggestions';
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-areas:
      'title title title'
      'search search dependencies'
      'results suggestions dependencies';
  }
`;

const StyledTitle = styled(Title)`
  grid-area: title;
  justify-self: center;
  max-width: 830px;
`;

class Builder extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      dependencies: [],
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
        dependencies: data.stack ? data.stack.stack.dependencies : [],
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
    const { dependencies } = this.state;

    if (dependencies.length !== 0) {
      this.dependencies.clearMsg();
    }

    if (
      !dependencies.some(
        dependency =>
          dependency.name === pkg.name && dependency.version === pkg.version
      )
    ) {
      this.setState({
        dependencies: [...dependencies, { ...pkg, dev }],
        query: ''
      });
    }
    this.search.focus();
  }

  handleStackOnSelect(pkg) {
    const { dependencies } = this.state;

    this.dependencies.clearMsg();

    const newDependencies = dependencies.filter(
      dependency =>
        dependency.name !== pkg.name || dependency.version !== pkg.version
    );

    this.setState({
      dependencies: newDependencies
    });
  }

  render() {
    const { query, dependencies, loading } = this.state;

    return (
      <Wrapper>
        <StyledTitle
          title={'Build a stack.'}
          subtitle={
            '🥞 A tool for building an npm stack. 🎯Suggestions are packages that best suit your existing stack. To add a developer dependency press 💻.'
          }
        />
        <Dependencies
          dependencies={dependencies}
          onSelect={this.handleStackOnSelect}
          loading={loading}
          ref={dependencies => {
            this.dependencies = dependencies;
          }}
        />
        <Search
          value={query}
          onChange={this.handleQueryOnChange}
          ref={search => {
            this.search = search;
          }}
        />
        <Results query={query} onSelect={this.handleResultsOnSelect} />
        <Suggestions
          dependencies={dependencies}
          onSelect={this.handleResultsOnSelect}
        />
      </Wrapper>
    );
  }
}

export default withApollo(Builder);
