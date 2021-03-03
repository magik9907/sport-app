import { FunctionComponent } from 'react'
import Header from './Header'

type WrapperProps = {}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	)
}

export default Wrapper
