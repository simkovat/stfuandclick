import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const Headers = styled.div`
  margin-left: 10%;
  padding: 5px 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.7em;
  font-weight: bold;
`;
export const Row = styled.li`
  background-color: ${({ theme }) => theme.colors.tableRowDark};
  padding: 0 10px 0 15px;
  display: flex;
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableRowLight};
  }
`;
export const Rank = styled.div`
  padding: 10px;
  width: 10%;
`;
export const TeamData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
`;

export const Name = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;
