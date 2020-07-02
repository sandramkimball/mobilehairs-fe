import { userAdminAuth } from './../customHooks'

const withAdminAuth = props => userAdminAuth(props) && props.children

export default withAdminAuth