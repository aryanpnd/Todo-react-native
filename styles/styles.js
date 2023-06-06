import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: "white",
  },
  headText: {
    fontSize: 30,
    color:"#393646",
        fontWeight: 'bold',
  },
  headText2: {
    fontSize: 25,
    backgroundColor: "#C70D3A",
    color: "white",
    textAlign: "center",
    width: "100%"
  },
  headText3: {
    fontSize: 25,
  },
  linkContainer: {
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#03C988',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#5F264A',
    paddingVertical: 20,
    paddingHorizontal: 130,
    borderRadius: 15,
  },
  btnMark: {
    backgroundColor: '#03C988',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  btnAdd: {
    backgroundColor: '#3A1078',//puple
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 15,
  },
  btnClear: {
    backgroundColor: '#FF0060',//red
    paddingVertical: 20,
    paddingHorizontal: 130,
    borderRadius: 15,
  },
  btnClearSmall: {
    backgroundColor: '#FF0060',//red
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  btnDone: {
    backgroundColor: '#FF0060',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  searchInput: {
    width: 350,
    height: 80,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white"
  },
  searchInput2: {
    backgroundColor: "white",
    width: 350,
    height: 200,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  todos: {
    width: "100%",
    backgroundColor: "#060047",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10
  },
  todos2: {
    width: "100%",
    backgroundColor: "#B3005E",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10
  },
  bigBtnText: {
    color: "white", fontWeight: "bold", fontSize: 20
  }
});
export default styles;