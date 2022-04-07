import styled from "@emotion/styled";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
function Header() {
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO add onclick
        />
        {console.log("whats happening")}
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header search */}
      <HeaderSearch>
        <SearchOutlinedIcon />
        <input placeholder="search here" />
      </HeaderSearch>

      {/* Header right */}
      <HeaderRight>
        <HelpOutlineOutlinedIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  background-color: #3f0f40;
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.4;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30%;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(AccountCircleOutlinedIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.3;
  border-radius: 6px;
  opacity: 1;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
const HeaderRight = styled.div`
  cursor: pointer;
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
