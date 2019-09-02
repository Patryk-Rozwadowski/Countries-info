import { GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT } from './actions';

export const getCountries = () => {
    return {
        type: GET_COUNTRIES
    }
}

export const deleteCountry = id => {
    return {
        type: DELETE_COUNTRY,
        id
    }
}

export const getCountry = id => {
    return {
        type: GET_COUNTRY,
        id
    }
}

export const searchCountries = searchText => {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export const setContinent = name => {
    return {
        type: SET_CONTINENT,
        name
    }
}