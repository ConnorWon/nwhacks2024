import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, TextField, styled, Drawer, Stack } from "@mui/material";
import { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const MenuOpenButton = styled(IconButton)`
  position: absolute;
  bottom: 1%;
  z-index: 999;
  background-color: white;
`;

const SearchButton = styled(IconButton)`
  width: 56px;
  height: 56px;
`;

const CustomDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 50%;
    margin: auto;
    padding-left: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const DrawerContainer = styled(Stack)`
  flex-direction: row;
`;

export const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const [distVal, setDistVal] = useState(null);
  const [fieldValue, setFieldValue] = useState("");

  // const { setCoords } = props;

  const updateValue = (e) => {
    setFieldValue(e.target.value);
  };

  const updateDistVal = (e) => {
    if (e.target.value === "") {
      setDistVal("");
    } else if (!e.target.value.match(/[a-z || A-Z]/)) {
      setDistVal(Number(e.target.value));
    } else {
      setDistVal("");
    }
  };

  const fetchRoutes = () => {
    // const response = fetch();
    // setCoords(response);
  };

  return (
    <>
      <MenuOpenButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <KeyboardArrowUpIcon />
      </MenuOpenButton>
      <CustomDrawer
        open={open}
        anchor="bottom"
        onClose={() => {
          setOpen(false);
        }}
      >
        <DrawerContainer>
          <TextField
            label="Distance"
            value={distVal}
            onChange={updateDistVal}
            fullWidth
            sx={{ mr: "16px" }}
          />
          <TextField
            label="Starting Point"
            value={fieldValue}
            onChange={updateValue}
            fullWidth
          />
          <SearchButton
            sx={{ color: "#1976d2" }}
            disabled={fieldValue === "" || distVal === ""}
            onClick={fetchRoutes}
          >
            <SearchIcon />
          </SearchButton>
        </DrawerContainer>
      </CustomDrawer>
    </>
  );
};
