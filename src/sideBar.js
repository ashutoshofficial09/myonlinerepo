import styled from "@emotion/styled";
import {
  AppsOutlined,
  BookmarkBorder,
  CreateOutlined,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  InboxOutlined,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import SideBarOption from "./sideBarOption";

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

      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={InboxOutlined} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved item" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user group" />
      <SideBarOption Icon={AppsOutlined} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={AddIcon} addChannelOption title="Add channels" />
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: #3f0f40;
  color: white;
  flex: 0.3;
  border-top: 1px solid #4927;
  max-width: 240px;
  margin-top: 64px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #4927;
  padding: 13px;

  > .MuiSvgIcon-root {
    color: #4927;
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
