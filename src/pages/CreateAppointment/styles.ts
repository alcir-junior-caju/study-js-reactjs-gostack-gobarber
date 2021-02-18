import { Link } from 'react-router-dom';

import { shade } from 'polished';
import styled from 'styled-components';

import ArrowLeftIcon from '@assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '@assets/ArrowRightIcon.svg';

interface ListProps {
  selectedprovider: number;
}

export const Container = styled.div``;

export const ProviderList = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 32px auto;
  max-width: 1100px;
  overflow: hidden;
  padding: 0 20px;
`;

export const List = styled(Link)<ListProps>`
  align-items: center;
  background: ${({ selectedprovider }) =>
    selectedprovider ? '#ff9000' : '#3e3b47'};
  border-radius: 10px;
  color: ${({ selectedprovider }) =>
    selectedprovider ? '#232129' : '#f4ede8'};
  display: flex;
  padding: 8px 12px;
  text-decoration: none;
  transition: background-color 0.2s;

  & + a {
    margin-left: 20px;
  }

  &:hover {
    background: ${shade(0.4, '#3e3b47')};
  }

  img {
    border-radius: 50%;
    height: 28px;
    width: 28px;
  }

  > svg {
    background: #4d4958;
    color: #f4ede8;
    border-radius: 50%;
    height: 28px;
    padding: 6px;
    width: 28px;
  }

  strong {
    flex: 1;
    font-size: 12px;
    margin-left: 10px;
    white-space: nowrap;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 64px auto;
  max-width: 1100px;
  padding: 0 20px;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;
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
