import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseListRow Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header 1" />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
    expect(th.hasClass('thCentered_1jmnjx-o_O-style'));
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).hasClass('th_ykpdyk-o_O-style'));
    expect(th.at(1).hasClass('th_ykpdyk-o_O-style'));
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Cell 1"
        textSecondCell="Cell 2"
      />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual('Cell 1');
    expect(td.at(1).text()).toEqual('Cell 2');
  });
});
