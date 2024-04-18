import { Link } from "react-router-dom";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import errorPNG from "/—Pngtree—error icon_4550477.png";

function Error() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} display="flex"
          flexDirection="column"
          alignItems="center">
          <Avatar
            src={errorPNG}
            alt="error"
            sx={{ width: "300px", height: "300px", margin: "20px" }}
          />

          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
            fontWeight={700}
          >
            صفحه مورد نظر یافت نشد!
          </Typography>
          <Link to={`/`} style={{ textDecoration: "none"}}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                width: "250px",
                borderRadius: 3,
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                marginBottom:"50px"
              }}
            >
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Error;
