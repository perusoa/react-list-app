import React from 'react';
import { ArrowSmRightIcon, ArrowSmLeftIcon, XIcon } from '@heroicons/react/solid';

export default function ListItem({ listKey, listItemId, listText, onListItemDelete, onListItemMove }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-md py-2 px-3 w-100 mb-3">
      <p className="font-medium w-100 mr-auto pr-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{listText}</p>
      <div onClick={() => onListItemDelete(listKey, listItemId)} className="p-1 transition-all duration-300 hover:bg-red-400 bg-red-300 rounded-md pointer mr-2 cursor-pointer">
        <XIcon className="w-6 text-red-800" />
      </div>
      <div onClick={() => onListItemMove(listKey, listItemId)} className="p-1 transition-all duration-300 hover:bg-gray-400 bg-gray-300 rounded-md pointer cursor-pointer">
        {listKey === 'list1' ? <ArrowSmRightIcon className="w-6 text-gray-800 transform lg:rotate-0 rotate-90" /> : <ArrowSmLeftIcon className="w-6 text-gray-800 transform lg:rotate-0 rotate-90" />}
      </div>
    </div>
  )
}
