import React from 'react';
import ListItem from './ListItem';

export default function ListGroup({ listKey, listName, listItems, onListItemDelete, onListItemMove }) {
  return (
    <div className="w-100 lg:w-1/2 lg:max-w-sm mb-20 lg:mb-0">
      <h3 className="text-lg font-bold mb-3">{listName}</h3>
      {listItems.length === 0 && <p class="text-sm text-gray-500">No items have been added to this list, move items into here from the other list, or start adding them by using the form above.</p>}
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
