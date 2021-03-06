import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
