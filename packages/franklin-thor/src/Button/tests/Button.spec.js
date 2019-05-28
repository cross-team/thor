import Button from '../Button';

let component;

beforeEach(() => {
  component = shallow(<Button variant="outlin" id="btn-test" />);
});

describe('<Button /> rendering', () => {
  it('should render one <Button>', () => {
    expect(component.find('#btn-test')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
