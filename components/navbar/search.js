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
    // const matches = AutosuggestHighlightMatch(suggestionText, query);
    // const parts = AutosuggestHighlightParse(suggestionText, matches);

    // return (
    //   <div className={'cntr-sggst '}>
    //     <span className="name">
    //       {parts.map((part, index) => {
    //           const className = part.highlight ? 'highlight' : null;
    //           return (
    //             <span className={className} key={index}>{part.text}</span>
    //           );
    //         })}
    //       <div className="yr-sggt">{ suggestion.year }</div>
    //     </span>
    //     <div className="i--cvr--srch" style={{backgroundImage: suggestion.url }}></div>
    //     {/* <img src="http://image.tmdb.org/t/p/w220_and_h330_face/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg"></img> */}
    //   </div>
    // );
