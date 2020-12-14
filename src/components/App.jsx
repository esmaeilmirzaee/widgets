import React from 'react';

import Accordion from './Accordion';

const items = [
  {
    title: 'Something',
    content:
      'Incididunt aliquip Lorem nisi fugiat labore eiusmod commodo qui officia veniam in. Laboris commodo exercitation ut ut anim mollit commodo id reprehenderit tempor aute nulla nisi. Qui sint sit eiusmod deserunt mollit ipsum enim sint. Ad eiusmod irure eu et in ipsum.',
  },
  {
    title: 'lorem',
    content:
      'Proident id eiusmod dolore est aute. Magna exercitation non sit minim qui laborum in qui reprehenderit. Cillum culpa irure exercitation nulla irure sint esse velit minim adipisicing. Pariatur in id pariatur laboris culpa commodo aliqua cupidatat aliquip adipisicing cupidatat nisi. Aute duis eiusmod amet nostrud anim dolore eu nisi incididunt adipisicing. Aliquip quis fugiat incididunt sunt esse commodo duis.',
  },
  {
    title: 'ipsum',
    content:
      'Ea veniam dolor voluptate quis reprehenderit dolor. Anim amet ut ea ut ipsum ipsum velit. Incididunt aute laborum ullamco ex qui.',
  },
];

const App = () => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <Accordion items={items} />
    </div>
  );
};

export default App;