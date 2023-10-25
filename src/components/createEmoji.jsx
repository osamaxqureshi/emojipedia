import React from'react';
import Entry from './Entry';

function createEmoji(emojipedia){
    return (
      <Entry
        key={emojipedia.id}
        id={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
        />
    );
  }

export default createEmoji;