import React from 'react';

import styled from 'styled-components';

import SelectedPackagesList from './selectedPackagesList';
import Actions from './actions';

const StackSection = styled.div`
  margin-top: 60px;
  margin-right: 20px;

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

    this.setCoppiedNot = this.setCoppiedNot.bind(this);
  }

  setCoppiedNot() {
    this.actions.setCoppiedNot();
  }

  render() {
    const { selectedPackages, loading, onSelect } = this.props;

    return (
      <StackSection>
        <StackTitle>{'Your stack:'}</StackTitle>
        <SelectedPackagesList
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
      </StackSection>
    );
  }
}

export default SelectedPackages;
