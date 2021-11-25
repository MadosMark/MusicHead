import { StyleSheet } from "react-native";

export default StyleSheet.create({
  quizContainer: {
    backgroundColor: "#dedede",
    height: "100%",
  },
  quizHolder: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 15,
    backgroundColor: "#dedede",
  },

  question: {
    marginTop: 60,
    marginVertical: 16,
    alignItems: "center",
  },
  questionText: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "NovaSquare",
    color: "#D0D3D4",
    opacity: 1,
    shadowOffset: { width: -0.4, height: -0 },
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 0.7,
  },

  giveUpText: {
    color: "#dedede",
    opacity: 1,
    shadowOffset: { width: -0.7, height: -0 },
    shadowColor: "#000",
    shadowRadius: 0.6,
    shadowOpacity: 0.7,
    fontSize: 18,
    fontFamily: "NovaSquare",
  },

  nextButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },

  nextButton: {
    backgroundColor: "#FFF",
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowRadius: 1,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },

  nextButtonText: {
    color: "#dedede",
    opacity: 1,
    shadowOffset: { width: -0.7, height: -0 },
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOpacity: 0.7,
    fontSize: 22,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dedede",
  },
  modalHolder: {
    backgroundColor: "#dedede",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitleText: {
    textAlign: "center",
    fontSize: 35,
    color: "#dedede",
    opacity: 1,
    shadowOffset: { width: -1, height: -0 },
    shadowColor: "#000",
    shadowRadius: 0.8,
    shadowOpacity: 0.8,
    paddingVertical: 45,
    fontFamily: "NovaSquare",
  },
  modalScoreKeeper: {
    color: "#fac8cd",
    opacity: 1,
    shadowOffset: { width: -0.8, height: -0 },
    shadowColor: "#000",
    shadowRadius: 0.7,
    shadowOpacity: 0.7,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "NovaSquare",
    marginTop: 35,
  },

  scoreKeeperContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 35,
    padding: 10,
  },
  scoreKeeperCounter: {
    color: "#fac8cd",
    opacity: 1,
    shadowOffset: { width: -0.8, height: -0 },
    shadowColor: "#000",
    shadowRadius: 0.7,
    shadowOpacity: 0.7,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "NovaSquare",
  },
  scoreKeeperNumber: {
    color: "#fac8cd",
    opacity: 1,
    shadowOffset: { width: -0.8, height: -0 },
    shadowColor: "#000",
    shadowRadius: 0.7,
    shadowOpacity: 0.7,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "NovaSquare",
  },

  totalScoreKeeper: {
    color: "#fac8cd",
    opacity: 1,
    shadowOffset: { width: -0.8, height: -0 },
    shadowColor: "#000",
    shadowRadius: 0.7,
    shadowOpacity: 0.7,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "NovaSquare",
    marginBottom: 45,
  },
});
