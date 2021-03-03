import { FunctionComponent } from 'react'
import Footer from './Footer'
import Header from './Header'

type WrapperProps = {}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Wrapper
