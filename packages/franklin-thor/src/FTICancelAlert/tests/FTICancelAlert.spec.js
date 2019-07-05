import FTICancelAlert from '../index'

let component

beforeEach(() => {
  component = shallow(<FTICancelAlert id="fticancel-test" />)
})

describe('<FTICancelAlert /> rendering', () => {
  it('should render one <FTICancelAlert>', () => {
    expect(component.find('#fticancel-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
