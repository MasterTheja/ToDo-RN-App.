import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';

const InputItem = props => {
  const [item, setItem] = useState('');
  const onSetItem = (itemS) => {
    setItem(itemS)
  };
  const addItemHandler = () => {
    props.onAddItem(item);
    setItem('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={Styles.Container}>
        <TextInput
          style={Styles.input}
          placeholder='  Hello'
          value={item}
          onChangeText={onSetItem}
        />
        <View style={Styles.ButtonCuntainer}>
          <TouchableOpacity
            style={Styles.Button}
            onPress={props.onCancle}
          >
            <Text>cancle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.Button}
            onPress={addItemHandler}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const Styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#3cf7ca',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 200,
  },
  Button: {
    // padding: 10,
    height: 40,
    backgroundColor: '#c9f5f6',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 50,
  },
  ButtonCuntainer: {
    flexDirection: 'row',

  }

})

export default InputItem;