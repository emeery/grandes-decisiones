import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// objeto
Enzyme.configure({
    adapter: new Adapter()
});