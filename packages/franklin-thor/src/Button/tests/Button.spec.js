import Button from '../Button';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Button id="btn-test" />);
});

describe('<Button /> rendering', () => {
  it('should render one <Button>', () => {
    expect(wrapper.find('#btn-test')).toHaveLength(1);
  });
});
