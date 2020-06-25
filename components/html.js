import React from 'react';

export default function Html({ children }) {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
}
