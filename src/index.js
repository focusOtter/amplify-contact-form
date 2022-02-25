import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

ReactDOM.render(
	<React.StrictMode>
		<AmplifyProvider>
			<App />
		</AmplifyProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
