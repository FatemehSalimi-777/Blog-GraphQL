import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import logo from "/flowers-svgrepo-com.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const natigate = useNavigate();
  return (
    <AppBar position="sticky" display="flex" justifycontent="space-between">
      <Container maxWidth="lg">
        <Toolbar>
          <img
            src={logo}
            alt="logo"
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            onClick={() => natigate("/")}
          />
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            وبلاگ
          </Typography>

          <AutoStoriesIcon
            onClick={() => natigate("/")}
            sx={{ cursor: "pointer" }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
