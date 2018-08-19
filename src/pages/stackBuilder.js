import React from 'react';

import Title from '../components/Title';
import Search from '../containers/stackBuilder/search';
import Results from '../containers/stackBuilder/results';
import Stack from '../containers/stackBuilder/stack';

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
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Source Sans Pro'
        }}
      >
        <Title
          title={'Build your stack.'}
          subtitle={
            'Suggestions are packages📦 that best suit your existing dependencies👇🏼'
          }
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap-reverse'
          }}
        >
          <div style={{ width: '100%', maxWidth: 900 }}>
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
          </div>
          <Stack
            selectedPackages={selectedPackages}
            onSelect={this.handleStackOnSelect}
          />
        </div>
      </div>
    );
  }
}

export default StackBuilder;
