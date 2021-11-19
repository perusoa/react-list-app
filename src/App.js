import React, { useState, useEffect } from 'react';
import ListHeader from './ListHeader';
import ListForm from './ListForm';
import ListGroup from './ListGroup';

export default function App() {
  const [lists, setLists] = useState({
    list1: [],
    list2: []
  });

  // Get saved lists localStorage item and set the state
  useEffect(() => {
    const savedLists = localStorage.getItem('lists');
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    }
  }, []);

  // Whenever a list item is changed or a new item is added, lets persist both lists to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const cloneDeep = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  }

  const onListFormSubmit = (newListItem) => {
    setLists(prevLists => {
      const newLists = cloneDeep(prevLists);
      newLists.list1.push(newListItem);
      return newLists;
    });
  }

  const onListItemDelete = (listKey, listItemId) => {
    setLists(prevLists => {
      const newLists = cloneDeep(prevLists)
      newLists[listKey] = newLists[listKey].filter(listItem => listItem.id !== listItemId);
      return newLists;
    });
  }

  const onListItemMove = (listKey, listItemId) => {
    setLists(prevLists => {
      const newLists = cloneDeep(prevLists);
      const listItemToMove = prevLists[listKey].find(listItem => listItem.id === listItemId);
      newLists[listKey] = newLists[listKey].filter(listItem => listItem.id !== listItemId);
      if (listKey === 'list1') {
        newLists.list2.push(listItemToMove);
      } else {
        newLists.list1.push(listItemToMove);
      }
      return newLists;
    });
  }

  const totalListItems = lists.list1.length + lists.list2.length;

  return (
    <div className="container mx-auto my-8 px-6">
      <ListHeader
        title="List App"
        subTitle="Total Items"
        amount={totalListItems} />
      <ListForm
        onListFormSubmit={onListFormSubmit} />
      <div className="flex flex-col lg:flex-row justify-between mt-14">
        <ListGroup
          listKey="list1"
          listName="List 1"
          listItems={lists.list1}
          onListItemDelete={onListItemDelete}
          onListItemMove={onListItemMove} />
        <ListGroup
          listKey="list2"
          listName="List 2"
          listItems={lists.list2}
          onListItemDelete={onListItemDelete}
          onListItemMove={onListItemMove} />
      </div>
    </div>
  )
}
