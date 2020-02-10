import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  img {
    justify-self: center;
    align-self: center;
  }

  h1 {
    align-self: center;
    font-size: 20px;
  }

  div.types {
    align-self: center;
    display: flex;

    p {
      background: ${props => props.typeColor};
      padding: 5px;
      margin: 5px;
      color: #fff;
    }
  }

  div.info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    p.title {
      font-weight: bold;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center
    }
  }
 
`;
