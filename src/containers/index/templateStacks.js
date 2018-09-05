import React from 'react';

import styled from 'styled-components';

import { Query } from 'react-apollo';
import { templateStacksQuery } from '../../lib/graphql/queries';

import StackCard from '../../components/StackCard';
import StackPlaceholder from '../../components/StackPlaceholder';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const StacksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const TemplateStacks = ({ history }) => (
  <Wrapper>
    <Title>{'Templates:'}</Title>
    <StacksWrapper>
      <Query query={templateStacksQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <StackPlaceholder loading />;
          }

          if (error) {
            return <StackPlaceholder error />;
          }

          return data.templateStacks.map(stack => (
            <StackCard
              id={stack.id}
              name={stack.name}
              color={stack.color}
              dependencies={stack.dependencies}
              template={true}
              history={history}
              key={stack.id}
            />
          ));
        }}
      </Query>
    </StacksWrapper>
  </Wrapper>
);

export default TemplateStacks;
