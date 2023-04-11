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
import tinyColor from 'tinycolor2';
import ExpandMore from './ExpandMore';
import GistForks from './GistForks';
import languageCodes, { Languages } from '../../utils/languageColorCode';
import { IFile } from '../../typings/gist';

// const LanguageChip = styled(Chip, {
//   shouldForwardProp: (prop) => prop !== 'language',
// })<{ language: Languages }>(({ language, theme }) => ({
//   backgroundColor: languageCodes[language],
//   color: tinyColor(languageCodes[language]).isDark()
//     ? theme.palette.common.white
//     : theme.palette.common.black,
// }));

const GistContent = styled(CardContent)`
  padding: 0 24px;
`;

interface IGistCardProps {
  avatarUrl: string;
  files: IFile[];
  languages: Languages[];
  id: string;
  description: string;
}

const GistCard = (props: IGistCardProps) => {
  const { avatarUrl, files, languages, id, description } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={avatarUrl}
          ></Avatar>
        }
        title={description || 'No Description'}
      />

      <GistContent>
        <List dense>
          {files.map((file) => (
            <ListItem
              key={file.raw_url}
              secondaryAction={
                <IconButton
                  edge="end"
                  component="a"
                  href={file.raw_url}
                  rel="noopener noreferrer"
                  target="_blank"
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
              <ListItemText primary={file.filename} />
            </ListItem>
          ))}
        </List>
        <Stack spacing={1} marginTop="1rem">
          <Stack direction="row" spacing={1}>
            {languages.map((language) => (
              <Chip
                key={language}
                label={language}
                color="primary"
                sx={{
                  backgroundColor: languageCodes[language],
                  color: tinyColor(languageCodes[language] || '').isDark()
                    ? '#fff'
                    : '#000',
                }}
              />
            ))}
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
        <GistForks id={id} />
      </Collapse>
    </Card>
  );
};

export default GistCard;
