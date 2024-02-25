import { tabs } from "./config";
import { ReactElement } from "react";
import NavigationTab from "./components/NavigationTabs";
import { WrapperBar } from "./ui/styled.ts";

const NavigationBar = (): ReactElement => {
    return (
        <WrapperBar>
            {tabs.map((tab, i) => (
                <NavigationTab key={i} tab={tab} />
            ))}
        </WrapperBar>
    );
};

export default NavigationBar;