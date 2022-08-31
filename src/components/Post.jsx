import React from 'react';
import { Share, Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import {
  Card,
  Avatar,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  IconButton,
  CardHeader,
  Checkbox,
} from '@mui/material';

function Post() {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Mick Smith"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://picsum.photos/300/200"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          aria-label="add to favorites"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: 'red' }} />}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
