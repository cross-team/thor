import FTIKanBanColumn from '../index'

let component

beforeEach(() => {
  component = shallow(<FTIKanBanColumn id="ftiKanBanColumn-test" />)
})

describe('<FTIKanBanColumn /> rendering', () => {
  it('should render one <FTIKanBanColumn>', () => {
    expect(component.find('#ftiKanBanColumn-test')).toHaveLength(1)
    expect(component).toMatchSnapshot()
  })
})
