import { styled } from '@creditas-ui/system';
import { Typography } from '@creditas-ui/typography';
import { media } from '@creditas-ui/utilities';
import { CardContent as OriginalCardContent } from '../Card';

const CardContent = styled(OriginalCardContent)`
  padding-top: 16px;
  margin: 0;
  ${media.up('5xl')} {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    padding-top: 24px;
  }
`;

const Title = styled(Typography)`
  font-size: 16px;

  ${media.up('5xl')} {
    font-size: 18px;
  }
`;

const Description = styled(Typography)`
  margin-top: 12px;
`;

export { Title, Description, CardContent };
