import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectCounter } from "@/store/selectors";
import { decrement, increment } from "@/store/actions";

const SavedScreen = () => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>{`Counter is ${counter}`}</Text>
      <Button title="Increment" onPress={() => dispatch(increment(1))} />
      <Button title="Decrement" onPress={() => dispatch(decrement(1))} />
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});
