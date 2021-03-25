import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from "@react-native-picker/picker";

export function CustomPicker(props) {
    const handleChange = () => {
        if (props.action) {
            props.action(props.id);
        }
    };

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={props.selectedValue}
                mode="dialog"
                onValueChange={handleChange}>
                {createPickerItems(props.items)}
            </Picker>
        </View>
    );
}

function createPickerItems(items) {
    return items.map((item) => {
        return <Picker.Item lablel={item.description} value={item.value}></Picker.Item>
    });
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
