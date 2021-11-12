import React from 'react';
import { Box, Grid } from '@creditas-ui/layout';
import { CardHeader, CardBackground, Card } from '../Card';
import { Speedometer } from '../../assets/icons/Speedometer';
import { Brush } from '../../assets/icons/Brush';
import { Sofa } from '../../assets/icons/Sofa';
import { Car } from '../../assets/icons/Car';
import { House } from '../../assets/icons/House';
import CarImg from '../../assets/images/car.webp';
import { SectionTitle } from '../SectionTitle';
import { Title, Description, CardContent } from './DiscoverSection.style';
import i18n from '../../i18n';

export type VoidFunction = () => void;

const DiscoverSection = (): JSX.Element => {
  return (
    <Box>
      <SectionTitle>{i18n.t('cards:discover.title')}</SectionTitle>
      <Grid
        marginTop={{ _: '24px', '5xl': '20px' }}
        marginBottom="10px"
        gridGap={20}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows={{ _: '1fr 1fr 1fr 1fr', '5xl': '1fr 1fr 1fr' }}
        data-testid="discover-section-content"
      >
        <>
          <Card
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            shadow
            gridColumn={{ _: '1 / 3', '5xl': '1 / 2' }}
            gridRow={{ _: '1 / 3', '5xl': '1 / 3' }}
            onClick={(): void => {}}
          >
            <CardHeader>
              <Speedometer />
            </CardHeader>
            <CardBackground right="0" top="0">
              <img src={CarImg} alt="CarPicture" />
            </CardBackground>
            <CardContent flexDirection="column">
              <Title color="neutral.90" variant="bodyLgMedium">
                {i18n.t('cards:discover.auto.title')}
              </Title>
              <Description color="neutral.60" variant="bodySmRegular">
                {i18n.t('cards:discover.auto.description')}
              </Description>
            </CardContent>
          </Card>

          <Card
            shadow
            gridColumn={{ _: '1', '5xl': '2' }}
            gridRow={{ _: '3', '5xl': '1' }}
            onClick={(): void => {}}
          >
            <CardHeader>
              <Car />
            </CardHeader>
            <CardContent>
              <Title color="neutral.90" variant="bodyLgMedium">
                {i18n.t('cards:discover.car_loan.title')}
              </Title>
            </CardContent>
          </Card>

          <Card
            shadow
            gridColumn={{ _: '2', '5xl': '2' }}
            onClick={(): void => {}}
          >
            <CardHeader>
              {' '}
              <House />
            </CardHeader>
            <CardContent>
              <Title color="neutral.90" variant="bodyLgMedium">
                {i18n.t('cards:discover.home_loan.title')}
              </Title>
            </CardContent>
          </Card>

          <Card shadow onClick={(): void => {}}>
            <CardHeader>
              <Brush />
            </CardHeader>
            <CardContent>
              <Title color="neutral.90" variant="bodyLgMedium">
                {i18n.t('cards:discover.renovate_your_property.title')}
              </Title>
            </CardContent>
          </Card>

          <Card shadow onClick={(): void => {}}>
            <CardHeader>
              <Sofa />
            </CardHeader>
            <CardContent>
              <Title color="neutral.90" variant="bodyLgMedium">
                {i18n.t('cards:discover.sell_your_property.title')}
              </Title>
            </CardContent>
          </Card>
        </>
      </Grid>
    </Box>
  );
};

export { DiscoverSection };
