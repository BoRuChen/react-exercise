import { GuessNumber } from "../pages/guessNumber";

export interface IRoute {
    path: string,
    name: string,
    exact: boolean,
    component: any,
    props?: any
}

export const routes: IRoute[] = [
    {
        path: '/guess',
        name : 'Guess Number',
        component : GuessNumber,
        exact:true
    }
]