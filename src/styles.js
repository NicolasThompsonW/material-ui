import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
  },
  icon: {
    color: "red",
    marginRight: "4px",
  },
  button: {
    backgroundColor: "black",
    color: "red",
  },
  cardGrid: {
    paddingTop: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    display: "block",
    margin: "auto",
  },
  footer: {
    backgroundColor: "black",
    padding: "50px 0",
    color: "white",
    textAlign: "center",
  },
}));

export default useStyles;
