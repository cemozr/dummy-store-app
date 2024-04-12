import { Container, Grid, ListItem, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { ProductsSection } from "./components/ProductsSection";
import { DUMMY_PRODUCTS } from "./dummyProducts.ts";
import { ProductCard } from "./components/ProductCard.tsx";
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h5"
          color={"whitesmoke"}
          sx={{ marginLeft: "1rem" }}
        >
          EVERYTHING YOU NEED
        </Typography>
        <ProductsSection>
          {DUMMY_PRODUCTS.map((product) => {
            return (
              <Grid item key={product.id}>
                <ListItem sx={{ height: "100%" }}>
                  <ProductCard {...product} />
                </ListItem>
              </Grid>
            );
          })}
        </ProductsSection>
      </Container>
    </>
  );
}

export default App;
