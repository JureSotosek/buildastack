import React from 'react';

class Search extends React.Component {
  focus() {
    this.input.focus();
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <div
        style={{
          width: '100%',
          marginTop: 40,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20
        }}
      >
        <div
          style={{ margin: 20, textShadow: '1px 1px lightGrey', fontSize: 23 }}
        >
          🕵🏼Search to add packages:{' '}
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: 500,
            padding: 7,
            borderRadius: 7,
            boxShadow: '0 5px 15px 0 rgba(37,44,97,0.25)',
            backgroundColor: 'white'
          }}
        >
          <input
            type="text"
            placeholder="react, react-dom, graphql,..."
            style={{
              width: '100%',
              border: '0px solid',
              outline: 'none',
              backgroundColor: 'transparent',
              fontSize: 20
            }}
            value={value}
            onChange={event => onChange(event.target.value)}
            ref={input => {
              this.input = input;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
