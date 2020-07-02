import { userAuth } from './../customHooks'

const withAuth = props => userAuth(props) && props.children

export default withAuth