import { FC, FunctionComponent, memo, ReactElement, SVGAttributes } from "react";
import { Container, Label, Wrapper } from "./styled.ts";

interface INavigationTab {
    tab: { label: string, component: string, icon: FunctionComponent<SVGAttributes<SVGElement>> };
}

const NavigationTab: FC<INavigationTab> = ({ tab }): ReactElement => {

    return (
        <Wrapper>
            <Container>
                <img src={`${tab.icon}`} alt={"icon"}
                     style={{
                         marginRight: "10px",
                         height: "18px",
                         width: "18px",
                     }} />
                <Label>
                    {tab.label}
                </Label>
            </Container>
        </Wrapper>

    );
};

export default memo(NavigationTab);