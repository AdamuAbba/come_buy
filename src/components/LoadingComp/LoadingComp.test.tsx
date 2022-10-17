import {render} from '@testing-library/react-native';
import LoadingComp from './LoadingComp';

describe('<LoadingComp/>', () => {
  test('test if component renders', () => {
    const {getByTestId} = render(<LoadingComp />);
    const mainView = getByTestId('main-view');
    expect(mainView).toBeTruthy();
  });
});
