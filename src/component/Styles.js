import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "100px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "10px",
  },
  title: {
    marginRight: "40px",
  },
  signOut: {
    marginLeft: "40px",
    marginRight: "40px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.info.main,
    padding: "50px 0",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.info.main,
    alignItems: "center",
  },
  root: {
    marginTop: "100px",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  list2: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  root2: {
    display: "flex",
    width: "350px",
    height: "200px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    marginTop: "20px",
    marginRight: "5px",
    width: 100,
    height: 100,
  },
  rootQuestion: {
    marginTop: "50px",
    flexGrow: 1,
  },
  paperQuestion: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "75%",
  },
  imageQuestion: {
    maxWidth: "75%",
    height: 128,
  },
  imgQuestion: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  chosen: {
    backgroundColor: theme.palette.info.main,
  },
  notChosen: {
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    marginTop: "100px",
    marginLeft: "40px",
    marginRight: "40px",
  },
  field: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
  },
}));

export default useStyles;
