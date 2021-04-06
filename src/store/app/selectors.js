import {createSelector} from 'reselect';
import {NameSpace} from "../reducer";
import {getFilms} from "../data/selectors";
import {getFilmsByGenre} from "../../utils";

export const getActiveGenre = (state) => state[NameSpace.APP].activeGenre;

export const getFilmsFilteredByGenre = createSelector(
    [getFilms, getActiveGenre],
    (films, activeGenre) => {
      return getFilmsByGenre(films, activeGenre);
    }
);
