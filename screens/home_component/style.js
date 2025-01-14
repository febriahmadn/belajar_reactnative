import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    flexDirection: "column",
    marginTop: "15%",
  },

  slideBanner: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  slideBannerItem: {
    height: "100%",
    marginRight: "-200%",
    zIndex: -10,
  },

  menu: {
    flex: 0.6,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  menuItem: {
    flex: 1,
    height: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  menuItemImage: {
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  menuItemText: {},

  info: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  infoItem: {
    width: "48%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  iklan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iklanContent: {
    marginTop: -70,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  tab: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },

  slideContainer1: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

