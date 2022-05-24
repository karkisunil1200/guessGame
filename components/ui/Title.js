import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fe5d2c",
    textAlign: "center",
    borderWidth: 4,
    borderColor: "#fbf7f7",
    padding: 12,
  },
});
