import Button from '../Button'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

configure({ adapter: new Adapter() })

let component
beforeEach(() => {
  component = shallow(<Button variant="outlined" id="btn-test" />)
})

describe('<Button /> rendering', () => {
  it('should render one <Button>', () => {
    expect(component.find('#btn-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
