import styled from "@emotion/styled";
import React from "react";

const SideBarOption = ({ Icon, title }) => {
  console.log(Icon);
  return (
    <SideBarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 0 }} />}
      {Icon ? (
        <h4>{title}</h4>
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
  font-size: 12px;
  padding-left: 2px;
  align-items: center;
  cursor: pointer;
`;

const SideBarOptionChannel = styled.div``;
