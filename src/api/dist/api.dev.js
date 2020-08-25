"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gamesAPI = void 0;

var axios = _interopRequireWildcard(require("axios"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var gamesAPI = {
  getGames: function getGames(seasonYear, page) {
    return axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/games/seasonYear/".concat(seasonYear),
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2",
        "useQueryString": true
      }
    }).then(function (res) {
      debugger;
      return {
        games: res.data.api.games.splice(page * 100 - 100, 100),
        pages: Math.ceil(res.data.api.games.length / 100)
      };
    });
  },
  getSeasonYears: function getSeasonYears() {
    return axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/seasons/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "b21dc0a5c8msh99996a35636b826p119283jsnfdffea2f6cb2",
        "useQueryString": true
      }
    }).then(function (res) {
      return res.data.api.seasons;
    });
  }
};
exports.gamesAPI = gamesAPI;