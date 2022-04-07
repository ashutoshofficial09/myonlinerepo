import styled from "@emotion/styled";
import React from "react";

const SideBarOption = ({ Icon, title, addChanneloption }) => {
  const addChannel = () => {
    const channelName = prompt("please enter your channel name");
  };
  const selectChannel = () => {};

  return (
    <SideBarOptionContainer
      onClick={addChanneloption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
};
export default SideBarOption;

const SideBarOptionContainer = styled.div`
  display: flex;
  padding-left: 2px;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-size: 12px;
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SideBarOptionChannel = styled.div``;
