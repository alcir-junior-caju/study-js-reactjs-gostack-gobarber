import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  display: flex;
  margin: 64px auto;
  max-width: 1100px;
  padding: 0 20px;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  p {
    align-items: center;
    color: #ff9000;
    display: flex;
    font-weight: 500;
    margin-top: 8px;

    span {
      align-items: center;
      display: flex;
    }

    span + span::before {
      background: #ff9000;
      content: '';
      height: 12px;
      margin: 0 8px;
      width: 1px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 500;
  }

  div {
    align-items: center;
    background: #3e3b47;
    border-radius: 10px;
    display: flex;
    margin-top: 24px;
    padding: 16px 24px;
    position: relative;

    &:before {
      background: #ff9000;
      content: '';
      height: 84px;
      left: 0;
      position: absolute;
      top: 14px;
      width: 1px;
    }

    img {
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }

    strong {
      color: #fff;
      margin-left: 24px;
    }

    span {
      align-items: center;
      color: #999591;
      display: flex;
      margin-left: auto;

      svg {
        color: #ff9000;
        margin-right: 8px;
        margin-top: 3px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    border-bottom: 1px solid #3e3b47;
    color: #999591;
    display: block;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`;

export const Appointment = styled.div`
  align-items: center;
  display: flex;

  & + div {
    margin-top: 16px;
  }

  span {
    align-items: center;
    color: #f4ede8;
    display: flex;
    margin-left: auto;

    svg {
      color: #ff9000;
      margin-right: 8px;
      margin-top: 3px;
    }
  }

  div {
    align-items: center;
    background: #3e3b47;
    border-radius: 10px;
    display: flex;
    flex: 1;
    margin-left: 24px;
    padding: 16px 24px;

    img {
      border-radius: 50%;
      height: 56px;
      width: 56px;
    }

    strong {
      color: #fff;
      font-size: 20px;
      margin-left: 24px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
