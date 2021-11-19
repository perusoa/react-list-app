import React from 'react';
import ListItem from './ListItem';

export default function ListGroup({ listKey, listName, listItems, onListItemDelete, onListItemMove }) {
  // console.log(listItems);
  return (
    <div className="w-100 lg:w-1/2 lg:max-w-sm mb-20 lg:mb-0">
      <h3 className="text-lg font-bold mb-3">{listName}</h3>
      {listItems.map(listItem => {
        return <ListItem
          key={listItem.id}
          listKey={listKey}
          listItemId={listItem.id}
          listText={listItem.text}
          onListItemDelete={onListItemDelete}
          onListItemMove={onListItemMove} />
      })}
    </div>
  )
}
