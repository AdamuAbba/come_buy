import {ComponentProps} from 'react';
import {TextInput} from 'react-native-paper';

interface Props extends ComponentProps<typeof TextInput> {
  name: string;
}

type ICBInputField = React.FC<Props>;
export type {ICBInputField};
