"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SurveyCard from '../surveys/SurveyCard';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Profile() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            K.K
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Karla Kamakia"
        subheader="Joined August 29, 2024"
      />
      <CardMedia
        component="img"
        height="200"
        image="/images/media/sapiens-neat.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" component="div" sx={{ color: 'text.dark' }}>
          <ul>
            <li>
                Age: 28
            </li>
            <li>
                Flow: Heavy
            </li>
            <li>
                Period Type: Regular
            </li>
            <li>
                Sanitary of Choice: Pad
            </li>
            <li>
                Sanitary Brand: Always Discreet Pads
            </li>
            <li>
                Brand Rating: 4
            </li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions className='flex-row-center' disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {expanded ? (
            <p style={{ fontSize: "14px" }} className='m-0 ms-2'>Click the dropdown to hide Surveys</p>
        ): (
            <p style={{ fontSize: "14px" }} className='m-0 ms-2'>Click the dropdown for more Surveys</p>
        )}
        {" "}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Surveys:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            <SurveyCard />
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          <SurveyCard />
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          <SurveyCard />
          </Typography>
          <Typography>
          <SurveyCard />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}