import HeaderComp from '../components/HeaderComp';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Check page rendering', () => {
  it('Should render without error', () => {
    const title = 'Africa';
    const header = renderer.create(<Router><HeaderComp title={title} /></Router>).toJSON();
    expect(header).toMatchSnapshot();
  });
});