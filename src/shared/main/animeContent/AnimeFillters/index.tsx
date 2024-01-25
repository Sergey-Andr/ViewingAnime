import { Box } from "@mui/material";
import Select, { components } from "react-select";
import { FC } from "react";
import { IOptions } from "../../../../store/Main/SelectedOptionsStore.ts";

interface IAnimeFilter {
    type: string;
    list: IOptions[];
    label: string;
    selectedOptions: IOptions[];
    onChangeSelectedOptions: (newOptions: IOptions[]) => void;
}


const AnimeFilter: FC<IAnimeFilter> = ({ type, list, label, selectedOptions, onChangeSelectedOptions }) => {

    const CustomOption = (props: any) => (
        <components.Option {...props}>
            {props.data.label}
            {props.isSelected ?
                <img
                    src={("../../../../public/checkmark.svg")}
                    style={{ width: 20 }}
                    alt={"checkmark"}
                />
                :
                ""
            }
        </components.Option>
    );
    const CustomOptionClearIndicator = (props: any) => (
        <components.ClearIndicator  {...props}>
            <img src={("../../../../public/cross.svg")} alt={"cross"} />
        </components.ClearIndicator>
    );
    const CustomDropdownIndicator = (props: any) => (
        <components.DropdownIndicator   {...props}>
            <img src={("../../../../public/down-triangle.svg")} alt={"down-triangle"}
                 style={{
                     width: "18px",
                 }} />
        </components.DropdownIndicator>
    );


    return (
        <Box sx={{ width: "100%", margin: "0px 15px" }}>
            <Select
                components={{
                    Option: CustomOption,
                    ClearIndicator: CustomOptionClearIndicator,
                    DropdownIndicator: CustomDropdownIndicator,
                }}
                onChange={(e => {
                    onChangeSelectedOptions(e as IOptions[]);
                })}
                value={selectedOptions}
                options={list}
                isMulti={type === "genres"}
                isSearchable={false}
                placeholder={label}
                hideSelectedOptions={false}
                controlShouldRenderValue={false}
                closeMenuOnSelect={false}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        background: "linear-gradient(to bottom, #1a685b, #257d6e)",
                        boxShadow: "none",
                        borderColor: state.isFocused ? "#33ab97" : "transparent",
                        "&:hover": {
                            borderColor: state.isFocused ? "#33ab97" : "none",
                        },
                        height: "34px",
                        width: "200px",
                    }),
                    placeholder: (baseStyles) => ({
                        ...baseStyles,
                        color: "#fff",
                    }),
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        background: "linear-gradient(to bottom, #1a685b, #2e9b8e)",
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontFamily: "sans-serif",
                        backgroundColor: state.isFocused || state.isSelected ? "#2b9280" : baseStyles.backgroundColor,
                        color: state.isFocused ? "#fff" : baseStyles.color,
                        "&:hover": {
                            backgroundColor: state.isFocused || state.isSelected ? "#2b9280" : baseStyles.backgroundColor,
                            color: state.isFocused ? "#fff" : baseStyles.color,
                        },
                    }),
                }}
            />
        </Box>
    );
};

export default AnimeFilter;