import React, { useState } from 'react';

import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';

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

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          options={options}
          selected={selected}
          onSetSelected={setSelected}
        />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
