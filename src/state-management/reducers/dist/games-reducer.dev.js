"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setSeasonYearsAC = exports.setSeasonYearAC = exports.setCurrentPageAC = exports.setGamesAC = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_GAMES = 'SET-GAMES';
var SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
var SET_SEASON_YEAR = 'SET-SEASON-YEAR';
var SET_SEASON_YEARS = 'SET-SEASON-YEARS';
var initialState = {
  games: [],
  pages: 0,
  currentPage: 1,
  seasonYear: 2019,
  seasonYears: []
};

var gamesReducer = function gamesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_GAMES:
      {
        return _objectSpread({}, state, {
          games: action.games.games,
          pages: action.games.pages
        });
      }

    case SET_CURRENT_PAGE:
      {
        return _objectSpread({}, state, {
          currentPage: action.page
        });
      }

    case SET_SEASON_YEAR:
      {
        return _objectSpread({}, state, {
          seasonYear: action.seasonYear
        });
      }

    case SET_SEASON_YEARS:
      {
        return _objectSpread({}, state, {
          seasonYears: _toConsumableArray(action.seasonYears)
        });
      }

    default:
      {
        return state;
      }
  }
};

var setGamesAC = function setGamesAC(games) {
  return {
    type: SET_GAMES,
    games: games
  };
};

exports.setGamesAC = setGamesAC;

var setCurrentPageAC = function setCurrentPageAC(page) {
  return {
    type: SET_CURRENT_PAGE,
    page: page
  };
};

exports.setCurrentPageAC = setCurrentPageAC;

var setSeasonYearAC = function setSeasonYearAC(seasonYear) {
  return {
    type: SET_SEASON_YEAR,
    seasonYear: seasonYear
  };
};

exports.setSeasonYearAC = setSeasonYearAC;

var setSeasonYearsAC = function setSeasonYearsAC(seasonYears) {
  return {
    type: SET_SEASON_YEARS,
    seasonYears: seasonYears
  };
};

exports.setSeasonYearsAC = setSeasonYearsAC;
var _default = gamesReducer;
exports["default"] = _default;