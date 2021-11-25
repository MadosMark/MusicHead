import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#dedede",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontFamily: "Anurati",
    fontSize: 50,
    color: "#dedede",
    opacity: 1,
    shadowOffset: { width: -1, height: -0 },
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 0.9,
  },
  image: {
    height: 150,
    width: 150,
    margin: 35,
    opacity: 0.6,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0.8, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 0.7,
  },
  EnterText: {
    color: "#dedede",
    fontFamily: "Anurati",
    fontSize: 30,
    shadowOffset: { width: -1, height: -0 },
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 0.8,
    marginBottom: -5,
  },
});

export default styles;
