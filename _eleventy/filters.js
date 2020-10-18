module.exports = {

  incrementAttribute: function (dictionary, key) {
    dictionary[key] = Number.isInteger(dictionary[key]) ? dictionary[key] + 1 : 1;
    return dictionary;
  },

  wwwlessHostname: function (url) {
    return new URL(url).hostname.replace(/^www\./, '');
  },
  
};