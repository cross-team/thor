import Button from '../src/Button';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Button />);
});

describe('<Button /> rendering', () => {
  it('should render one <Button>', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
