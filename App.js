
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button
}
  from 'react-native';
import OutputListItem from './components/OutputListItem';
import InputItem from './components/InputComponent';

export default function App() {

  const [listItem, setListItem] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const addItems = ItemTitle => {

    if (ItemTitle.length === 0) {
      return;
    };

    // var obj = {
    //   id: Math.random(),
    //   value: ItemTitle
    // }

    // var list = [...listItem]
    // var newList = list.push(obj);
    // console.log('newlist =>',newList);
    setListItem(currentItem => [...currentItem, { id: Math.random(), value: ItemTitle }])
    // setListItem(newList);
    console.log(ItemTitle);

    setAddModal(false);
  };

  console.log('listitem ', listItem);
  const removeItemHandler = itemId => {
    console.log("delated id " + itemId);
    setListItem(currentItem => {
      return currentItem.filter((item) => item.id !== itemId)
    });
  };
  const cancleModalHandler = () => {
    setAddModal(false);
  };

  return (
    <View style={styles.container} >
      <TouchableOpacity
        style={styles.Button}
        onPress={() => setAddModal(true)}>
        <Text>Add</Text>
      </TouchableOpacity>
      <InputItem
        visible={addModal}
        onAddItem={addItems}
        onCancle={cancleModalHandler}
      />
      <FlatList
        data={listItem}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData =>
          <OutputListItem
            id={itemData.item.id}
            onDelete={removeItemHandler}
            scrollables={itemData.item.value}
          />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  Button: {
    height: 40,
    backgroundColor: '#c9f5f6',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 50,
  },
});
