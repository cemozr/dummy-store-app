import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  description: string;
};

export const ProductCard = ({
  image,
  title,
  price,
  description,
}: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{ backgroundColor: "secondary.light" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={"bold"}
          component="div"
        >
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions sx={{ backgroundColor: "secondary.main" }}>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};
