import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Item } from '../state/Item';

export const items = [
  Object.assign(new Item(), {
    type: 'consumable',
    name: 'Apple',
    image: require('./items/apples.png'),
    emblemCost: 0,
    numberHeld: 3,
    inStorage: 3,
    description: (
      <>
        <Typography paragraph>
          An apple is a sweet, edible fruit produced by an apple tree (Malus
          pumila).
        </Typography>
        <Typography paragraph>
          Apple trees are cultivated worldwide and are the most widely grown
          species in the genus Malus.
          <br />
          The tree originated in Central Asia, where its wild ancestor, Malus
          sieversii, is still found today.
        </Typography>
      </>
    ),
    description2: (
      <>
        <Typography paragraph>
          Apples have been grown for thousands of years in Asia and Europe and
          were brought to North America by European colonists.
        </Typography>
        <Typography paragraph>
          Apples have religious and mythological significance in many cultures,
          including Norse, Greek and European Christian traditions.
        </Typography>
      </>
    )
  }),
  Object.assign(new Item(), {
    type: 'art',
    name: 'Shaolin Kung Fu',
    image: require('./items/arts.png'),
    emblemCost: 0,
    numberHeld: 1,
    inStorage: 1,
    description: (
      <>
        <Typography paragraph>
          Shaolin Kung Fu is one of the oldest, largest, and most famous styles
          of wushu or kungfu.
        </Typography>
        <Typography paragraph>
          It combines Zen Buddhism and martial arts and originated and was
          developed in the Shaolin temple in Henan province, China during its
          1500-year history.
        </Typography>
      </>
    ),
    description2: (
      <Typography paragraph>
        Popular sayings in Chinese folklore related to this practice include
        "All martial arts under heaven originated from Shaolin" and "Shaolin
        kung fu is the best under heaven," indicating the influence of Shaolin
        kung fu among martial arts.
      </Typography>
    )
  }),
  Object.assign(new Item(), {
    type: 'art',
    name: 'Punch',
    image: require('./items/arts2.png'),
    emblemCost: 0,
    numberHeld: 1,
    inStorage: 1,
    description: (
      <>
        <Typography paragraph>
          A punch is a striking blow with the fist.
        </Typography>
        <Typography paragraph>
          It is used in most martial arts and combat sports, most notably
          boxing, where it is the only type of offensive technique allowed.
          <br />
          In sports, hand wraps or other padding such as gloves may be used to
          protect athletes and practitioners from injuring themselves
        </Typography>
      </>
    ),
    description2: (
      <>
        <Typography paragraph>
          The use of punches varies between different martial arts and combat
          sports. Styles such as boxing, Suntukan or Russian fist fighting use
          punches alone, while others such as Kickboxing, Muay Thai, Lethwei or
          karate may use both punches and kicks.
        </Typography>
        <Typography paragraph>
          Others such as wrestling (excluding professional wrestling) and judo
          (punches and other striking techniques, atemi, are present in judo
          kata, but are forbidden in competitions) do not use punches at all.
        </Typography>
      </>
    )
  }),
  Object.assign(new Item(), {
    type: 'ninjutsu',
    name: 'Disco',
    image: require('./items/arts3.png'),
    emblemCost: 0,
    numberHeld: 1,
    inStorage: 1,
    description: (
      <>
        <Typography paragraph>Do the disco</Typography>
        <Typography paragraph>
          Disco is a music genre and subculture that emerged in the 1970s from
          the United States' urban nightlife scene.
          <br />
          The music, the fashion, many song lyrics and other cultural phenomena
          associated with disco were focused on having a good time on the dance
          floor.
        </Typography>
      </>
    ),
    description2: (
      <Typography paragraph>
        Disco started as a mixture of music from venues popular with African
        Americans, Hispanic and Latino Americans, Italian Americans,[1][2] LGBT
        people (especially African-American and white gay men), and psychedelic
        hippies in Philadelphia and New York City during the late 1960s and
        early 1970s. Disco can be seen as a reaction to both the dominance of
        rock music and the stigmatization of dance music by the counterculture
        during this period.
      </Typography>
    )
  }),
  Object.assign(new Item(), {
    type: 'consumable',
    name: 'Banana',
    image: require('./items/bananas.png'),
    emblemCost: 2,
    numberHeld: 0,
    inStorage: 0,
    description: (
      <>
        <Typography paragraph>An edible fruit</Typography>
        <Typography paragraph>
          Produced by several kinds of large herbaceous flowering plants in the
          genus Musa.[3] In some countries, bananas used for cooking may be
          called "plantains", distinguishing them from dessert bananas.
        </Typography>
      </>
    ),
    description2: (
      <>
        <Typography paragraph>
          The scientific names of most cultivated bananas are Musa acuminata,
          Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata
          × M. balbisiana, depending on their genomic constitution. The old
          scientific name for this hybrid, Musa sapientum, is no longer used.
        </Typography>
        <Typography>
          Musa species are native to tropical Indomalaya and Australia, and are
          likely to have been first domesticated in Papua New Guinea.
        </Typography>
      </>
    )
  }),
  Object.assign(new Item(), {
    type: 'tool',
    name: 'Hammer',
    image: require('./items/hammer.png'),
    emblemCost: 4,
    numberHeld: 0,
    inStorage: 0,
    description: (
      <>
        <Typography paragraph>
          A modern day hammer is a tool consisting of a weighted "head" fixed to
          a long handle that is swung to deliver an impact to a small area of an
          object. This can be, for example, to drive nails into wood, to shape
          metal (as with a forge), or to crush rock.[1][2] Hammers are used for
          a wide range of driving, shaping, and breaking applications.
        </Typography>
      </>
    ),
    description2: (
      <Typography paragraph>
        The modern hammer head is typically made of steel which has been heat
        treated for hardness, and the handle (also called a haft or helve) is
        typically made of wood or plastic. The term "hammer" also applies to a
        mechanism's part that delivers a blow, such as the hammer of a firearm
        or of a piano.
      </Typography>
    )
  })
];
