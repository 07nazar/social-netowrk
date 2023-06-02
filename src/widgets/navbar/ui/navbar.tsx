import {classNames} from "shared/lib/class-names/class-names";
import styles from './navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/app-link/app-link";
import {ThemeSwitcher} from "shared/ui/theme-switcher";


interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar)}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};








