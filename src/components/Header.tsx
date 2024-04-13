import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { ShoppingCart } from "./ShoppingCart";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "space-around" },
            backgroundColor: "primary",
            boxShadow: "none",
          }}
        >
          <Box display={"flex"} gap={"1rem"} sx={{ placeItems: "center" }}>
            <Box
              component="img"
              src="src\assets\logo.png"
              alt="logo"
              sx={{ width: "3rem" }}
            />
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", sm: "block" } }}
              fontWeight={"bold"}
              color={"secondary"}
            >
              MY SHOP
            </Typography>
          </Box>
          <ShoppingCart />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
