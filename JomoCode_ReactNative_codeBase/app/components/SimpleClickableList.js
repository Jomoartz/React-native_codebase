import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const SimpleClickableList = (items) => {
  // // Sample array of items
  // const items = [
  //   { id: '1', name: 'Item 1' },
  //   { id: '2', name: 'Item 2' },
  //   { id: '3', name: 'Item 3' },
  //   { id: '4', name: 'Item 4' },
  // ];

  const [selectedItemId, setSelectedItemId] = useState(null);

  // Function to handle item selection
  const handleSelect = (id) => {
    setSelectedItemId((prevSelectedId) => (prevSelectedId === id ? null : id));
    console.log(selectedItemId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = selectedItemId === item.id;
          return (
            <TouchableOpacity
              onPress={() => handleSelect(item.id)}
              style={[styles.itemContainer, isSelected && styles.selectedItem]}
            >
              <Text
                style={[styles.itemText, isSelected && styles.selectedText]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#f8f8f8",
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedItem: {
    backgroundColor: "#cce5ff",
    borderColor: "#007bff",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#0056b3",
  },
});

export { SimpleClickableList };
