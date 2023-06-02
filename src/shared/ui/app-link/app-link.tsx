import {classNames} from "shared/lib/class-names/class-names";
import styles from './app-link.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink : FC<AppLinkProps> = (props) => {
    const {className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props
    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[theme]])}>
            {children}
        </Link>
    );
};

