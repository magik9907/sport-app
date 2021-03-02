import { FunctionComponent } from 'react'

type WrapperProps = {}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return <main>{children}</main>
}

export default Wrapper
