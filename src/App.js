import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Error Display */}
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
