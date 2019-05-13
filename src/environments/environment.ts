export const environment = {
  production: false,
  baseUrl: {
    auth_token: 'https://api.themoviedb.org/3/authentication/token/new?api_key=',
    auth_session: 'https://api.themoviedb.org/3/authentication/session/new?api_key=',
    account: 'https://api.themoviedb.org/3/account?api_key=',
    search_movie: 'https://api.themoviedb.org/3/search/movie?api_key='
  },
  movie_query:'&language=en-US&page=1&include_adult=false&query=',
  authUrl: 'https://www.themoviedb.org/authenticate/',
  api_key: '4765555c9b2f2cfaab35a8f5dc134b0b'
};
