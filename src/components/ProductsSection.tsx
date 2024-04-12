import { Grid, List } from "@mui/material";

import { ReactNode } from "react";

type ProductsSectionProps = {
  children: ReactNode;
};
export const ProductsSection = ({ children }: ProductsSectionProps) => {
  return (
    <>
      <List>
        <Grid container margin={0}>
          {children}
        </Grid>
      </List>
    </>
  );
};
