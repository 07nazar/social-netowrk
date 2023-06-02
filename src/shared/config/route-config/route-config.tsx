import {RouteProps} from "react-router-dom";
import {MainLazy} from "pages/main";
import {AboutLazy} from "pages/about";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath : Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig : Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainLazy/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutLazy/>
    }
}