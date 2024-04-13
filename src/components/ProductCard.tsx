import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";

import { addToCart } from "../state/cart/cartSlice";

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export const ProductCard = ({
  id,
  image,
  title,
  price,
  description,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{ backgroundColor: "secondary.main" }}>
        <Typography
          gutterBottom
          variant="h6"
          fontWeight={"bold"}
          component="div"
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={"bold"}
          component="div"
        >
          {price} $
        </Typography>
        <Typography variant="body1" color={"secondary.light"}>
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ backgroundColor: "secondary.light" }}>
        <Button
          onClick={() => dispatch(addToCart({ id, title, price }))}
          size="small"
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};
