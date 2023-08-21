import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

export default function Categories() {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h2>Categories</h2>
      <p>{categories}</p>
    </div>
  );
}
