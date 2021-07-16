import { GuessNumber } from "../pages/guessNumber";
import { Home } from "../pages/home";

export interface IRoute {
    path: string,
    name: string,
    exact: boolean,
    component: any,
    props?: any
}

export const routes: IRoute[] = [
    {
        path: '/',
        name : 'Home',
        component : Home,
        exact:true
    },
    {
        path: '/guess',
        name : 'Guess Number',
        component : GuessNumber,
        exact:true
    }
]