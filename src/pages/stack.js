import React from 'react';

import styled from 'styled-components';

import { Query } from 'react-apollo';
import { stackQuery } from '../lib/graphql/queries';

import Title from '../components/Title';
import Actions from '../containers/stack/actions';
import DependenciesList from '../containers/stack/dependenciesList';
import SelectionPlaceholder from '../components/SelectionPlaceholder';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Owner = styled.div`
  margin-bottom: 5px;
  font-size: 20px;
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
            const { stack: stackQuery } = data;

            return (
              <React.Fragment>
                <Title
                  title={
                    loading ||
                    error ||
                    !data.stack ||
                    !stackQuery.stack ||
                    !stackQuery.stack.name
                      ? 'Stack'
                      : stackQuery.stack.name
                  }
                />
                {loading ? (
                  <SelectionPlaceholder loading={loading} />
                ) : error ? (
                  <SelectionPlaceholder loading={loading} />
                ) : !data.stack ? (
                  <SelectionPlaceholder msg={'No stack here 🙉'} />
                ) : stackQuery.stack.dependencies.length === 0 ? (
                  <SelectionPlaceholder msg={'Sorry, empty stack 😕'} />
                ) : (
                  <React.Fragment>
                    <Owner>
                      {stackQuery.stack.user
                        ? stackQuery.stack.user.name
                        : null}
                    </Owner>
                    <DependenciesList
                      dependencies={stackQuery.stack.dependencies}
                    />
                    <Actions
                      id={stackQuery.stack.id}
                      history={history}
                      dependencies={stackQuery.stack.dependencies}
                      owner={stackQuery.owner}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            );
          }}
        </Query>
      </Wrapper>
    );
  }
}

export default Stack;
