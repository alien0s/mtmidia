import React, { Fragment } from 'react'
import Autosuggest from 'react-autosuggest'

class AutoSuggest extends React.Component {
  constructor() {
      super();

      //Define state for value and suggestion collection
      this.state = {
          value: '',
          results: [],
          suggestions: [],
      };
       // this.clearSearch = this.clearSearch.bind(this);
  }

  // omdb apikey=a591bb53
  // Filter logic
  getSuggestions = async (value) => {
      const inputValue = value.trim().toLowerCase();
      let response = await fetch(`https://swapi.dev/api/people/?search=${inputValue}&format=json`);
      let data = await response.json()
      return data.results;
  };

  getSuggestionValue = suggestion => suggestion.name;

  // Render Each Option
  renderSuggestion = suggestion => (
    // <Link to={"/"+suggestion.id}>
      <div className="cntr-sggst react-autosuggest__suggestion">
        <div className="react-autosuggest__suggestions-list">
            <div className="ttl-sggt">
                {suggestion.name}
            </div>
        </div>
      </div>
    // </Link>
  );

  // OnChange event handler
  onChange = (event, { newValue }) => {
      this.setState({
          value: newValue
      });
  };

  // Suggestion rerender when user types
  onSuggestionsFetchRequested = ({ value }) => {
      this.getSuggestions(value)
          .then(data => {
              if (data.Error) {
                  this.setState({
                      suggestions: []
                  });
              } else {
                  this.setState({
                      suggestions: data
                  });
              }
          })
  };

  // Triggered on clear
  onSuggestionsClearRequested = () => {
      this.setState({
          suggestions: []
      });
  };

  render() {
      const { value, suggestions } = this.state;
      const inputProps = {
          placeholder: 'Pesquisar',
          value,
          onChange: this.onChange
      };

      return (
        <Fragment>
        <a className="fbk-svg" href="www.facebook.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 132 132">
            <path d="M66 0c37,0 66,30 66,66 0,35 -26,63 -60,66l0 -43 18 0c1,-2 0,-3 1,-5 0,-2 0,1 0,-3l2 -12c0,-1 0,-1 0,-1 -1,-1 -18,0 -21,0 0,-4 0,-8 0,-11 0,-8 1,-12 11,-12 2,0 9,0 11,0 0,-3 0,-11 0,-14 0,-6 2,-5 -10,-6 -3,0 -8,0 -11,0 -11,2 -17,7 -21,17 -2,7 -1,19 -1,26l-18 0c0,1 0,20 0,21 1,0 12,0 16,0l1 0c1,0 1,2 1,3 0,5 0,26 0,39 -29,-7 -51,-33 -51,-65 0,-36 30,-66 66,-66z"/>
          </svg>
        </a>
        <form>
          <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              onSuggestionSelected={this.clearSearch}
              inputProps={inputProps}
          />
        </form>
        <svg id="icnSrch" className="srch-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </Fragment>
      );
  }
}

export default AutoSuggest;
