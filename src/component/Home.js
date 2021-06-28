import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import useStyles from "./Styles";
import Answered from "./Answered";
import UnAnswered from "./UnAnswered";
import { useSelector } from "react-redux";

function Home(props) {
  const classes = useStyles();
  const [answered, setSelectedTap] = React.useState(false);
  const handleChange = (newValue) => {
    setSelectedTap(newValue);
  };
  const { id } = props;
  
  const state = useSelector((state) => state.questions);
  const answer = Object.values(state).filter(
    (data) =>
      data["optionOne"]["votes"].includes(id) ||
      data["optionTwo"]["votes"].includes(id)
  );
  const question = Object.values(state).filter(
    (data) =>
      !data["optionOne"]["votes"].includes(id) &&
      !data["optionTwo"]["votes"].includes(id)
  );

  return (
    <div className={classes.home}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={() => handleChange(false)}>UnAnswered</Button>
        <Button onClick={() => handleChange(true)}>Answered</Button>
      </ButtonGroup>
      {answered ? (
        <Answered answer={answer} id={id} />
      ) : (
        <UnAnswered question={question} id={id} />
      )}
    </div>
  );
}

export default Home;
