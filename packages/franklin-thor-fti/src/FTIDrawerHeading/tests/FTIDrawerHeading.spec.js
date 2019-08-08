import FTIDrawerHeading from '../index'

let component

beforeEach(() => {
  component = shallow(<FTIDrawerHeading id="ftiCard-test" />)
})

describe('<FTIDrawerHeading /> rendering', () => {
  it('should render one <FTIDrawerHeading>', () => {
    expect(component.find('#ftidrawerheading-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
