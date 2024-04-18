import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import sanitizeHTML from "sanitize-html";
import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
import Error from "../shared/Error";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" my={3} >
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
        <Grid item xs={12} m={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={2} margin={2}>
            {data.author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
