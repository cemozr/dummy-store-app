import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import {
  ButtonGroup,
  Divider,
  List,
  ListItem,
  Drawer,
  Grid,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { removeFromCart, increment, decrement } from "../state/cart/cartSlice";

export const ShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );
  const fixedTotalPrice = totalPrice.toFixed(2);
  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{ backgroundColor: "secondary.main" }}
      >
        Your Cart ({cartItems.length})
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: { xs: "16rem", sm: "40rem", md: "50rem" } }}
          role="presentation"
        >
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => {
                return (
                  <Grid container spacing={1} key={cartItem.id}>
                    <ListItem
                      sx={{
                        flexDirection: { xs: "column", sm: "row", md: "row" },
                      }}
                    >
                      <Grid
                        item
                        display={"flex"}
                        justifyContent={"space-between"}
                        sx={{
                          gap: { xs: 0.5 },
                          textAlign: { xs: "center", sm: "start", md: "start" },
                          flexDirection: { xs: "column", sm: "row", md: "row" },
                        }}
                        md={8}
                        sm={8}
                        xs={12}
                      >
                        <Typography variant="body1" fontWeight={"bold"}>
                          {cartItem.title}
                        </Typography>
                        <Typography variant="body1">
                          {cartItem.price} $
                        </Typography>
                        <Typography variant="body1">
                          {cartItem.quantity}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={4}
                        sm={4}
                        xs={0}
                        display={"flex"}
                        justifyContent={"end"}
                      >
                        <ButtonGroup variant="contained">
                          <Button
                            onClick={() => dispatch(increment({ ...cartItem }))}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                          <Button
                            onClick={() => dispatch(decrement({ ...cartItem }))}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Button
                            onClick={() =>
                              dispatch(removeFromCart({ ...cartItem }))
                            }
                          >
                            <DeleteIcon fontSize="small" />
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </ListItem>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      sx={{
                        border: "1px solid",
                        borderColor: "primary.light",
                        width: "100%",
                      }}
                    />
                  </Grid>
                );
              })
            ) : (
              <Typography
                variant="h4"
                textAlign={"center"}
                fontWeight={"bold"}
                sx={{
                  width: "100%",
                  backgroundColor: "primary.main",
                  color: "secondary.main",
                }}
              >
                Your Cart Is Empty
              </Typography>
            )}
          </List>
          <Box>
            <Typography variant="h6" textAlign={"end"} sx={{ marginRight: 2 }}>
              Total Price: {fixedTotalPrice} $
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
