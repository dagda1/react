import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount as mountComponent } from "enzyme";

(function setup() {
  Enzyme.configure({ adapter: new Adapter() });
})()

export function stubConsoleError() {
  let error = console.error;
  beforeEach(() => {
    console.error = warning => {
      throw new Error(warning);
    };
  });
  afterEach(() => {
    console.error = error;
  });
}

export function mount(element) {
  let mounted;
  beforeEach(() => {
    mounted = mountComponent(element);
  });
  afterEach(() => {
    if (mounted) {
      mounted.unmount();
    }
  });
}