import { Provider } from "react-redux";
import '@testing-library/jest-dom';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import HomeScreen from "../screens/HomeScreen";

afterEach(() => {
  cleanup();
});

describe('Testing redux store connection', () => {
  
  it('Render home screen without error', () => {
    render(<Provider store={store}><HomeScreen /></Provider>);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });

  test('Testing store', () => {
    const home = renderer.create(<Provider store={store}><HomeScreen /></Provider>).toJSON();
    expect(home).toMatchSnapshot();
  });

});