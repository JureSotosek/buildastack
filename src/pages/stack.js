import React from 'react';

import styled from 'styled-components';

import { Query } from 'react-apollo';
import { stackQuery } from '../lib/graphql/queries';

import Title from '../components/Title';
import Actions from '../containers/stack/actions';
import PackageCard from '../components/PackageCard';
import SelectionPlaceholder from '../components/SelectionPlaceholder';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Source Sans Pro;
`;

const Owner = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
`;

const PackagesWrapper = styled.div`
  width: 100%;
  max-width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Stack extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      },
      history
    } = this.props;

    return (
      <Wrapper>
        <Query query={stackQuery} variables={{ id }}>
          {({ loading, error, data }) => {
            if (error) {
              return <SelectionPlaceholder msg={'Error ⛑'} />;
            } else if (loading) {
              return <SelectionPlaceholder msg={'Loading...'} />;
            } else if (!data.stack) {
              return <SelectionPlaceholder msg={'No stack here 🙉'} />;
            } else if (data.stack.stack.dependencies.length !== 0) {
              const { user, name, dependencies } = data.stack.stack;

              return (
                <React.Fragment>
                  <Title title={name ? name : 'Shared stack.'} />
                  <Owner>{user ? user.name : null}</Owner>
                  <PackagesWrapper>
                    {dependencies.map(dependency => (
                      <PackageCard
                        key={dependency.name + dependency.version}
                        name={dependency.name}
                        version={dependency.version}
                        dev={dependency.dev}
                      />
                    ))}
                  </PackagesWrapper>
                  <Actions
                    id={id}
                    history={history}
                    selectedPackages={dependencies}
                    owner={data.stack.owner}
                  />
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
