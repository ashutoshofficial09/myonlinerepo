import styled from "@emotion/styled";
import { CreateOutlined, FiberManualRecord } from "@mui/icons-material";
import React from "react";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2> User Status</h2>
          <h3>
            <FiberManualRecord />
            Ashutosh
          </h3>
        </SideBarInfo>
        <CreateOutlined />
      </SideBarHeader>
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: #3f0f40;
  color: white;
  flex: 0.3;
  border-top: 1px solid #4927b;
  max-width: 240px;
  margin-top: 64px;
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #4927b;
  padding: 13px;
  > .MuiSvgIcon-root {
    color: #4927b;
    font-size: 18px;
    border-radius: 50%;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
