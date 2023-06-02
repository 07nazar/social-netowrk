import React, {FC, useState} from 'react';

interface SidebarProps {
    className?: string
}

import styles from './sidebar.module.scss'
import {classNames} from "shared/lib/class-names/class-names";
import {ThemeSwitcher} from "shared/ui/theme-switcher";

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                {/*Lang switcher*/}
            </div>
        </div>
    );
};



