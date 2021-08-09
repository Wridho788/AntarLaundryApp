import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { IconPesananAktif } from "../../assets";
import {
  WARNA_ABU_ABU,
  WARNA_UTAMA,
  WARNA_WARNING,
} from "../../utils/constant";

const PesananAktif = ({ title, status }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananAktif />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    flexDirection: "row",
    shadowOpacity: 0.29,
    shadowRadius: 4.64,
    elevation: 7,
    marginVertical: windowHeight * 0.02,
    alignItems: "center",
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
  },
  status: (status) => ({
    fontSize: 14,
    color:
      status === "sudah selesai"
        ? WARNA_UTAMA
        : status === "sedang dicuci"
        ? WARNA_WARNING
        : WARNA_ABU_ABU,
  }),
});

export default PesananAktif;
