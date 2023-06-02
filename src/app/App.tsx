import './styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/class-names/class-names";
import {useTheme} from "app/providers/theme-provider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>

            <AppRouter/>

        </div>
    )
}
