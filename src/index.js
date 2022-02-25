import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import '@aws-amplify/ui-react/styles.css'
Amplify.configure(config)

ReactDOM.render(
	<React.StrictMode>
		<AmplifyProvider>
			<App />
		</AmplifyProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
