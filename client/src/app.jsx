import React from 'react';
import ReactDOM from 'react-dom';

// import UseState from './hooks/useState.jsx';
import UseReducer from './hooks/useReducer.jsx';
// import UseEffect from './hooks/useEffect.jsx';
// import UseRef from './hooks/useRef.jsx';
// import UseLayoutEffect from './hooks/useLayoutEffect.jsx';
// import UseImperativeHandle from './hooks/useImperativeHandle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UseReducer />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));