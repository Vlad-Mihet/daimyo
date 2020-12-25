import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  padding: 2rem 1.5rem;
  width: 100%;
  background-color: #444;
  border-radius: 12px;
  margin-bottom: 0.75rem;
  filter: opacity(${({ sent }) => (sent === true ? "0.6" : "1")});
`;

const Avatar = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border: 4px solid #777;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: #121212;
`;

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FirstSpacedRow = styled.div`
  height: 1rem;
  width: 100%;
  background-color: #777;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const SecondSpacedRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const EmptyFiller = styled.div`
  height: 1rem;
  flex: 1;
  background-color: #666;
  border-radius: 8px;

  &:first-of-type {
    margin-right: 0.5rem;
  }
`;

const CardStatusWrapper = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  width: fit-content
  margin: 0 auto;
  align-items: center;

  svg,
  span {
    color: ${({ sent }) => (sent === true ? "#6A9CFD " : "#22a45a")};
  }

  svg {
    margin-right: 8px;
    width: 0.85rem !important;
    height: 0.85rem !important;
  }

  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export default function MessageCard({ sent }) {
  return (
    <Card sent={sent}>
      <Avatar />
      <CardInfo>
        <FirstSpacedRow />
        <SecondSpacedRow>
          <EmptyFiller />
          <EmptyFiller />
        </SecondSpacedRow>
        <CardStatusWrapper sent={sent}>
          <FontAwesomeIcon icon={faCheck} />
          <span>{sent ? "Sent" : "Responded"}</span>
        </CardStatusWrapper>
      </CardInfo>
    </Card>
  );
}
