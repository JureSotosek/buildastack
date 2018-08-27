import React from 'react';

import styled from 'styled-components';

import { Query } from 'react-apollo';
import { stackQuery } from '../lib/graphql/queries';

import Title from '../components/Title';
import StackActions from '../containers/stack/stackActions';
import StackCard from '../components/StackCard';
import SelectionPlaceholder from '../components/SelectionPlaceholder';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Source Sans Pro;
`;

class Stack extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Wrapper>
        <Title title={'Shared stack.'} />
        <Query query={stackQuery} variables={{ id }}>
          {({ loading, error, data }) => {
            if (error) {
              return <SelectionPlaceholder msg={'Error ⛑'} />;
            } else if (loading) {
              return <SelectionPlaceholder msg={'Loading...'} />;
            } else if (!data.stack) {
              return <SelectionPlaceholder msg={'No stack here 🙉'} />;
            } else if (data.stack.dependencies.length !== 0) {
              const dependencies = data.stack.dependencies;

              return (
                <React.Fragment>
                  {dependencies.map(dependency => (
                    <StackCard
                      key={dependency.name + dependency.version}
                      name={dependency.name}
                      version={dependency.version}
                      dev={dependency.dev}
                    />
                  ))}
                  <StackActions id={id} selectedPackages={dependencies} />
                </React.Fragment>
              );
            } else {
              return <SelectionPlaceholder msg={'Sorry, empty stack 😕'} />;
            }
          }}
        </Query>
      </Wrapper>
    );
  }
}

export default Stack;
