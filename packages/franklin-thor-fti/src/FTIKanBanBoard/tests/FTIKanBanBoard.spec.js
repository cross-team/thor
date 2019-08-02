import FTIKanBanBoard from '../index'

let component

beforeEach(() => {
  component = shallow(<FTIKanBanBoard id="ftiKanBanBoard-test" />)
})

describe('<FTIKanBanBoard /> rendering', () => {
  it('should render one <FTIKanBanBoard>', () => {
    expect(component.find('#fticard-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
