import * as React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ArticleIcon from '@mui/icons-material/Article';
import ListItemText from '@mui/material/ListItemText';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ExpandMore from './ExpandMore';
import GistForks from './GistForks';
import languageCodes from '../../utils/languageColorCode';

const LanguageChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'language',
})<{ language: keyof typeof languageCodes }>(({ language, theme }) => ({
  backgroundColor: languageCodes[language],
  color: theme.palette.common.white,
}));

const GistContent = styled(CardContent)`
  padding: 0 24px;
`;

const GistCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Timezones in JavaScript, from http://errtheblog.com/posts/49-a-zoned-defense"
      />

      <GistContent>
        <List dense>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                component="a"
                href="https://gist.github.com/robertpeteuil/bb2dc86f3b3e25d203664d61410bfa30"
              >
                <OpenInNewRoundedIcon />
              </IconButton>
            }
            divider
          >
            <ListItemAvatar>
              <Avatar>
                <ArticleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
        <Stack spacing={1} marginTop="1rem">
          <Stack direction="row" spacing={1}>
            <LanguageChip label="JavaScript" language="Vue" />
            <LanguageChip label="Ruby" language="Ruby" />
          </Stack>
        </Stack>
      </GistContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" mountOnEnter>
        <GistForks />
      </Collapse>
    </Card>
  );
};

export default GistCard;
