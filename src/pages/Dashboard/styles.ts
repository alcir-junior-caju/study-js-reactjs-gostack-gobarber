import { shade } from 'polished';
import styled from 'styled-components';

import ArrowLeftIcon from '@assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '@assets/ArrowRightIcon.svg';

export const Container = styled.div``;

export const Header = styled.header`
  background: #28262e;
  padding: 32px 0;
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;

  > img {
    height: 80px;
  }

  button {
    background: transparent;
    border: 0;
    margin-left: auto;

    svg {
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  margin-left: 80px;

  img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-left: 16px;

    span {
      color: #f4ede8;
    }

    a {
      color: #ff9000;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  display: flex;
  margin: 64px auto;
  max-width: 1120px;
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

  .DayPicker {
    border-radius: 10px;

    &-wrapper {
      padding-bottom: 0;
      background: #28262e;
      border-radius: 10px;
      z-index: 0;
    }

    &-NavBar {
      position: relative;

      ::before {
        content: '';
        width: 100%;
        height: 50px;
        position: absolute;
        background: #3e3b47;
        border-radius: 10px 10px 0 0;
        z-index: -1;
      }
    }

    &-NavButton {
      color: #999591 !important;
      margin-top: 0;
      top: 0;

      &--prev {
        background: url(${ArrowLeftIcon}) no-repeat center;
        margin-right: 0;
        left: 12px;
        width: 50px;
        height: 50px;
      }

      &--next {
        background: url(${ArrowRightIcon}) no-repeat center;
        right: 12px;
        width: 50px;
        height: 50px;
      }
    }

    &-Month {
      border-collapse: separate;
      border-spacing: 8px;
      margin: 0;
      padding: 0 10px 10px;
    }

    &-Caption {
      line-height: 50px;
      color: #f4ede8;

      > div {
        text-align: center;
      }
    }

    &-Weekday {
      color: #666360;
      font-size: 16px;
    }

    &-Day {
      width: 40px;
      height: 40px;
      transition: all 0.2s ease;
      border-radius: 10px;

      &--today {
        font-weight: normal;
        color: #fff;
      }

      &--available:not(.DayPicker-Day--outside) {
        background: #3e3b47;
        border-radius: 10px;
      }

      &--disabled {
        color: #666360;
        background: transparent !important;
      }

      &--selected:not(.DayPicker-Day--disabled) {
        background: #ff9000 !important;
        color: #232129 !important;
      }
    }

    &:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background: ${shade(0.2, '#3e3b47')};
    }
  }
`;
