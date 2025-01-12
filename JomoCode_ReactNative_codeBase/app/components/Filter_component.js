import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FilterComponent = ({ doThis, color }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={doThis}>
        <Icon name="filter" size={24} color={color} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FilterComponent;
