import FTIBadge from '../index'

let component

beforeEach(() => {
  component = shallow(<FTIBadge id="ftibadge-test" />)
})

describe('<FTIBadge /> rendering', () => {
  it('should render one <FTIBadge>', () => {
    expect(component.find('#ftibadge-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
