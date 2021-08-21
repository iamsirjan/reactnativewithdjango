import React from "react";
import { Text, SafeAreaView ,StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import actions from "./redux/actions"
import { useDispatch, useSelector } from 'react-redux';
const LogIn = (props) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    dispatch(actions.login(data))
  }

  return (
    <SafeAreaView>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="email"
            placeholder="email"
          />
        )}
        name="email"
       
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}  
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="password"
            
          />
        )}
        name="password"
        defaultValue=""
      />
     

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    
    height: 40,
    margin: 12,
    
    borderWidth: 1,
  },
})
export default LogIn