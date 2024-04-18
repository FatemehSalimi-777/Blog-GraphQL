import { AppBar, Typography } from "@mui/material";

function Footer() {
  return (
    <AppBar position="static">
      <Typography
        component="p"
        variant="p"
        color="secondary"
        bgcolor="primary"
        padding="10px"
        textAlign="center"
      >
        پروژه ی وبلاگ با GraphQL | فاطمه سلیمی
      </Typography>
    </AppBar>
  );
}

export default Footer;
