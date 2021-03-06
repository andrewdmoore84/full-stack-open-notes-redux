import { useEffect } from 'react';
import { initializeNotes } from './reducers/noteReducer';
import { useDispatch } from 'react-redux';

import Notes from './components/Notes';
import NewNote from './components/NewNote';
import VisibilityFilter from './components/VisibilityFilter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
    }, [dispatch]);

  return (
    <div>
      <NewNote/>
      <VisibilityFilter />
      <Notes/>
    </div>
  );
};

export default App;
