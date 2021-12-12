import "./productlist.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import productData from "./productData";
import { useContext } from "react";
import { ProductContext } from "../productContext";
const Productlist = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const displayNumbers = () => {
    return nums.map((n) => (
      <Grid item md={4} lg={3} sm={6} sx={12}>
        <h1 className="nums"> {n} </h1>
      </Grid>
    ));
  };

  const { productData } = useContext(ProductContext);

  const btnStyle = {
    backgroundColor: "cadetblue",
  };

  const displayGames = () => {
    return productData.map((game) => (
      <Grid item md={4} sm={6} sx={12}>
        <Card>
          <CardMedia component="img" image={game.img_url} height={270} />

          <CardContent>
            {/* <img src={game.img_url} className="img-fluid"/> */}

            <h3> {game.name} </h3>
            <p className="text-muted"> {game.publisher} </p>
            <Button style={btnStyle} variant="contained" color="secondary">
              {game.price}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Paper>
      <div className="container">
        <h1>Product Listing</h1>
        <Grid container spacing={3}>
          {/* {displayNumbers()} */}
          {displayGames()}
        </Grid>
      </div>
    </Paper>
  );
};
export default Productlist;
