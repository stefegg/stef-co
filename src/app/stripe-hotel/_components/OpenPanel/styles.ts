import styled from "styled-components";
import { StaticImageData } from "next/image";

type Image = {
  src: StaticImageData;
};

export const Wrapper = styled.div`
  max-width: 90%;
  margin: 20px 0px;
  border-radius: 4px;
`;

export const Header = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #e5e5e5;
  padding: 12px;
  background: #767b83;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #e5e5e5;
  font-family: Lobster;
  font-size: 24px;
  color: #ffdd00;
`;

export const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  background: #363636;
  color: #e5e5e5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #e6e8ec;
`;

export const Icon = styled.img<Image>`
  height: 24px;
  width: 24px;
  background: pink;
  border-radius: 50%;
`;

export const RoomImage = styled.img<Image>`
  width: 250px;
  cursor: pointer;
  border-radius: 4px;
`;

export const DetailWrap = styled.ul`
  width: 40%;
`;

export const DetailItem = styled.li`
  margin-bottom: 6px;
  font-style: italic;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 24px;
  width: 30%;
  flex-direction: column;
  align-items: center;
  font-family: Lobster;
  color: #ffdd00;
`;

export const CostWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CostAmount = styled.span`
  font-size: 32px;
  color: #cd0909;
  margin-right: 8px;
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const ImageLead = styled.span`
  font-style: italic;
  font-size: 10px;
  margin-top: 14px;
`;
