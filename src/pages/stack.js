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
            return (
              <React.Fragment>
                <Title
                  title={
                    loading ||
                    error ||
                    !data ||
                    !data.stack ||
                    !data.stack.stack ||
                    !data.stack.stack.name
                      ? 'Stack'
                      : data.stack.stack.name
                  }
                />
                {loading ? (
                  <SelectionPlaceholder loading={loading} />
                ) : error ? (
                  <SelectionPlaceholder loading={loading} />
                ) : !data || !data.stack ? (
                  <SelectionPlaceholder msg={'No stack here 🙉'} />
                ) : data.stack.stack.dependencies.length === 0 ? (
                  <SelectionPlaceholder msg={'Sorry, empty stack 😕'} />
                ) : (
                  <React.Fragment>
                    <Owner>
                      {data.stack.stack.user
                        ? data.stack.stack.user.name
                        : null}
                    </Owner>
                    <DependenciesList
                      dependencies={data.stack.stack.dependencies}
                    />
                    <Actions
                      id={data.stack.stack.id}
                      history={history}
                      dependencies={data.stack.stack.dependencies}
                      owner={data.stack.owner}
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
