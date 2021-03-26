import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from "@react-native-picker/picker";

export function CustomPicker(props) {
    const handleChange = (value) => {
        if (props.action) {
            props.action(value);
        }
    };

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={props.selectedValue}
                mode="dialog"
                onValueChange={handleChange}>
                {props.showPlaceholder && <Picker.Item key={-1} label={props.placeholderLabel} value=""/>}
                {createPickerItems(props.items)}
            </Picker>
        </View>
    );
}

function createPickerItems(items) {
    const PickerItems = items.map((item, index) => {
        return <Picker.Item key={index} label={item.description} value={item.value}></Picker.Item>
    });
    return PickerItems;
}

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        fontSize: 15,
        backgroundColor: 'white',
        marginVertical: 5
    }
});
