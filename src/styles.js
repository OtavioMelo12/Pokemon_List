import styled from 'styled-components';

export const Container = styled.div`
  div.grid-container {
    background: #f0f0f0;

    padding: 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  div.btn {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #f0f0f0;

    button {
      border: none;
      margin: 10px;
      margin-top: 25px;
      padding: 10px;

      width: 90px;

      background: #3D7DCA;
      color: #fff;

      border-radius: 5px;

      cursor: pointer;
    }
  }
`;
