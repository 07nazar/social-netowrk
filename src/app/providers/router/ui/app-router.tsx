import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "shared/config/route-config/route-config";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route path={path} element={<div className={'page'}>element</div>} key={path}/>
                ))}
            </Routes>
        </Suspense>
    );
};

