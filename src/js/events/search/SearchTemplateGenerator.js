export const SearchTemplateGenerator = {
  generateSuggest(terms) {
    const suggestListTemplate = terms.reduce((acc, cur) => {
      return (acc += `<li class="suggestion search-list">
          <img src="./src/images/arrow-top-right.svg" alt="이동">
          <span>${cur}</span>
        </li>`);
    }, '');
    return suggestListTemplate;
  },

  generateHistoryAndSuggestions(termsObj) {
    const HistoryTemplate =
      termsObj.history.reduce((acc, cur) => {
        return (acc += ` <li class="history search-list" >
          <span>${cur}</span>
          <img src="./src/images/close.svg" alt="삭제">
        </li>`);
      }, '') + this.generateSuggest(termsObj.suggest);
    return HistoryTemplate;
  },

  generateAutoComplete(terms, input) {
    if (!input || typeof input !== 'string') {
      throw new Error('Input is invalid.');
    }

    const inputRegex = new RegExp(input, 'gi');
    const AutoCompleteTemplate = terms.reduce((acc, cur) => {
      const highlighted = cur.keyword.replace(
        inputRegex,
        `<span class="highlighted">${input}</span>`
      );
      return (acc += ` <li class="autocomplete search-list" >
          <span>${highlighted}</span>
        </li>`);
    }, '');

    return AutoCompleteTemplate;
  },
};
