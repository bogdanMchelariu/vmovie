import { IMovie } from './IMovie';

export interface IResponseMovies{
    page: number,
    total_results: number,
    total_pages: number,
    results: IMovie[]

}