import React from 'react';

export default function ListHeader({ title, subTitle, amount }) {
  return (
    <div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-lg mt-2">{subTitle}: {amount}</p>
    </div>
  )
}
