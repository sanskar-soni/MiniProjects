import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import BackspaceIcon from "@mui/icons-material/Backspace";
import "./styles.css";

const Calculator = (props) => {
  const displayText = "0";
  const display = (
    <div>
      <Typography align="right" variant="h5">
        {displayText}
      </Typography>
    </div>
  );
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Paper elevation={3}>
        <Typography variant="h3">Calculator</Typography>
        <Container maxWidth="sm">
          <div className="display">{display}</div>
          <Box className="buttonWrap">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={3}>
                <Item></Item>
              </Grid>
              <Grid item xs={3}>
                <Item>2</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>3</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>x</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>4</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>5</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>6</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>-</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>7</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>8</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>9</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>+</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>0</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>.</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>=</Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};

Calculator.propTypes = {};

export default Calculator;
