import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import HeaderComp from '../components/HeaderComp';

describe('Check page rendering', () => {
  it('Should render without error', () => {
    const title = 'Africa';
    const header = renderer.create(<Router><HeaderComp title={title} /></Router>).toJSON();
    expect(header).toMatchSnapshot();
  });
});
