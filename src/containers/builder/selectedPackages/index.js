import React from 'react';

import styled from 'styled-components';

import PackagesList from './packagesList';
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

class SelectedPackages extends React.Component {
  constructor() {
    super();

    this.clearMsg = this.clearMsg.bind(this);
  }

  clearMsg() {
    this.actions.clearMsg();
  }

  render() {
    const { selectedPackages, loading, onSelect } = this.props;

    return (
      <Wrapper>
        <StackTitle>{'Your stack:'}</StackTitle>
        <PackagesList
          selectedPackages={selectedPackages}
          loading={loading}
          onSelect={onSelect}
        />
        {selectedPackages.length !== 0 && (
          <React.Fragment>
            <CommandsTitle>{'Install Commands:'}</CommandsTitle>
            <Actions
              selectedPackages={selectedPackages}
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

export default SelectedPackages;
