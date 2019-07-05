import FTICard from '../index'

let component

beforeEach(() => {
  component = shallow(<FTICard id="ftiCard-test" />)
})

describe('<FTICard /> rendering', () => {
  it('should render one <FTICard>', () => {
    expect(component.find('#fticard-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
