import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";

class EmployeeForm extends Component{
    render() {
        return(
            <View>
                <CardSection>
                    <Input 
                    label="Name"
                    placeholder="Sarah"
                    value={this.props.name}
                    onChangeText={(value) => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Phone"
                    placeholder="071-234-5678"
                    value={this.props.phone}
                    onChangeText={(value) => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.prop.employeeUpdate({porp: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursaday" value="Thursaday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                    
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;

    return { name, phone, shift}
}
export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);
