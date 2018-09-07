import React from 'react';

import styled from 'styled-components';

import DependenciesList from './dependenciesList';
import Actions from './actions';

const Wrapper = styled.div`
  margin: 10px;
  margin-top: 40px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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

class Dependencies extends React.Component {
  constructor() {
    super();

    this.clearMsg = this.clearMsg.bind(this);
  }

  clearMsg() {
    this.actions.clearMsg();
  }

  render() {
    const { dependencies, loading, onSelect } = this.props;

    return (
      <Wrapper>
        <StackTitle>{'Your stack:'}</StackTitle>
        <DependenciesList
          dependencies={dependencies}
          loading={loading}
          onSelect={onSelect}
        />
        {dependencies.length !== 0 && (
          <React.Fragment>
            <CommandsTitle>{'Install Commands:'}</CommandsTitle>
            <Actions
              dependencies={dependencies}
              ref={actions => {
                this.actions = actions;
              }}
            />
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}

export default Dependencies;
