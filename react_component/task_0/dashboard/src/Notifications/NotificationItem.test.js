import React from 'react'
import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem'

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />)
  })

  it('renders correct html with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />)
    const renderedHtml = wrapper.html()
    expect(renderedHtml).toEqual(
      '<li data-notification-type="default">test</li>'
    )
  })

  it('renders correct html with html prop', () => {
    const htmlProp = { __html: '<p>test</p>' }
    const wrapper = shallow(<NotificationItem html={htmlProp} />)
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(htmlProp)
  })
})
