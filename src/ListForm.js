import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ListForm({ onListFormSubmit }) {
  const [listText, setListText] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!listText) {
      return false;
    }

    onListFormSubmit({
      id: uuidv4(),
      text: listText
    });
    setListText('');
  }

  return (
    <form className="flex flex-row my-5 w-full" onSubmit={onFormSubmit}>
      <input
        className="flex-grow rounded-md p-3 bg-gray-100 mr-3"
        type="text"
        placeholder="Enter some text!"
        value={listText}
        onChange={(event) => setListText(event.target.value)} />
      <button
        className="rounded-md py-3 px-10 text-white bg-black"
        type="submit">
        Submit
      </button>
    </form>
  )
}
