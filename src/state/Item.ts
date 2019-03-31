import { ReactNode } from 'react';

export class Item {
  name?: string;
  emblemCost?: number;
  numberHeld?: number;
  image?: string;
  inStorage?: number;
  description: ReactNode;
  description2: ReactNode;
  type: ItemType = 'consumable';
}

export type ItemType = 'art' | 'consumable' | 'ninjutsu' | 'tool';
