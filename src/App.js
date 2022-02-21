import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

<<<<<<< HEAD
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
=======
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}
export default App;
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
