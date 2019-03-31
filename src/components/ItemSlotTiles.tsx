import * as React from 'react';
import { ItemSlots } from '../state/ItemSlots';
import { Item } from '../state/Item';
import { Tile, TileProps } from './Tile';
import { Row, RowProps } from './Row';
import { Action } from '../lib/action/Action';
import { createStyles, Omit, WithStyles, withStyles } from '@material-ui/core';
import { useObserver } from 'mobx-react-lite';
import { AppState } from '../state/AppState';

export const styles = createStyles({
  itemImage: {
    backgroundSize: 'contain',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    margin: `0 !important`
  }
});

export type ItemSlotTilesProps = Omit<RowProps, 'classes'> &
  WithStyles<typeof styles> & {
    slots: ItemSlots;
    available: Item[];
    tileProps?: Partial<TileProps>;
  };

export const ItemSlotTiles = withStyles(styles)((props: ItemSlotTilesProps) => {
  const { classes, slots, available, tileProps, ...rowProps } = props;
  const { itemSelect } = React.useContext(AppState.Context);
  return useObserver(() => (
    <Row {...rowProps}>
      {slots.list.map((item, index) => {
        const removeAction: Action = {
          input: 'X',
          name: 'Remove',
          description: 'Remove item from slot',
          callback: () => slots.remove(index)
        };
        const selectAction: Action = {
          input: 'A',
          name: 'Add',
          description: 'Add item to slot',
          callback: () =>
            itemSelect.start(available, selected =>
              slots.store(selected, index)
            )
        };
        const action = item ? removeAction : selectAction;
        return (
          <Tile key={index} meta={item} action={action} {...tileProps}>
            {item && item.image && (
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={classes.itemImage}
              />
            )}
          </Tile>
        );
      })}
    </Row>
  ));
});
