import * as React from 'react';
import { Typography } from '@material-ui/core';
import { AppState } from '../state/AppState';
import { Header } from './Header';
import { Stats } from './Stats';
import { ItemPages } from './ItemPages';
import { Item } from '../state/Item';
import { ActiveSpatialMeta } from '../lib/spatial/ActiveSpatialMeta';
import { useObserver } from 'mobx-react-lite';
import { ItemSlotTiles } from './ItemSlotTiles';
import { Row } from './Row';
import { Column } from './Column';

export const Equipment = () =>
  useObserver(() => {
    const { equipment } = React.useContext(AppState.Context);
    return (
      <Column flex={1}>
        <Row flex={1}>
          <Column flex={5}>
            <Row flex={1}>
              <Column flex={3}>
                <Header>
                  <Typography>Prosthetic Tools</Typography>
                </Header>
                <ItemSlotTiles
                  slots={equipment.toolSlots}
                  available={equipment.tools}
                />
              </Column>
              <Column flex={1}>
                <Header>
                  <Typography>Combat Arts</Typography>
                </Header>
                <ItemSlotTiles
                  slots={equipment.artSlots}
                  available={equipment.arts}
                  tileProps={{
                    size: 'large',
                    variant: 'octagon'
                  }}
                />
              </Column>
            </Row>
            <Row flex={1}>
              <Column flex={3}>
                <Header>
                  <Typography>Quick Items</Typography>
                </Header>
                <ItemSlotTiles
                  slots={equipment.itemSlots}
                  available={equipment.items}
                />
              </Column>
              <Column flex={1}>
                <Header>
                  <Typography>Ninjutsu</Typography>
                </Header>
                <ItemSlotTiles
                  slots={equipment.ninjutsuSlots}
                  available={equipment.ninjutsu}
                  tileProps={{
                    size: 'large',
                    variant: 'octagon'
                  }}
                />
              </Column>
            </Row>
          </Column>
          <ActiveSpatialMeta type={Item}>
            {item => <ItemPages item={item} style={{ flex: 3 }} />}
          </ActiveSpatialMeta>
        </Row>
        <AppState.Context.Consumer>
          {({ stats }) => <Stats stats={stats} />}
        </AppState.Context.Consumer>
      </Column>
    );
  });
