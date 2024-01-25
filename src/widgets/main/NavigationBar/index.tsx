import { tabs } from "./config";
import { ReactElement } from "react";
import NavigationTab from "../../../shared/main/NavigationTabs";
import { Wrapper } from "./styled.ts";

const NavigationBar = (): ReactElement => {
    return (
        <Wrapper>
            {tabs.map((tab) => (
                <NavigationTab tab={tab} />
            ))}
        </Wrapper>
    );
};

export default NavigationBar;