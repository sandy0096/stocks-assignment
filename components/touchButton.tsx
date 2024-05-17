import {Pressable} from 'react-native';
import styles from '../styles';

const TouchButton = ({
  onPress,
  open,
}: {
  onPress: () => void;
  open: boolean;
}): React.ReactNode => (
  <Pressable
    onPress={onPress}
    style={[styles.triangle, open && styles.triangleDown]}
  />
);

export default TouchButton;
