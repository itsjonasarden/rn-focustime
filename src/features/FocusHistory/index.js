import React from "react";
import { View, Text, FlatList } from "react-native";

import { Styles } from "./styles";

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={Styles.item}>- {item}</Text>;

  return (
    <View style={Styles.container}>
      {!history || !history.length ? (
        <Text style={Styles.title}>You haven't focused on anything yet!</Text>
      ) : (
        <>
          <Text style={Styles.title}>Focus History:</Text>
          <FlatList data={history} renderItem={renderItem} />
        </>
      )}
    </View>
  );
};
