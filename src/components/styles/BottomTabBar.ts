import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#2E7D32",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  activeIcon: {
    fontSize: 28,
  },
  label: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "500",
  },
  activeLabel: {
    fontSize: 11,
    fontWeight: "bold",
  },
});
