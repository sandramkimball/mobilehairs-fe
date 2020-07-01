import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const mapState = ({ user }) => ({
    // set currentUser to props passed into this function
    currentUser: user.currentUser
});

const userAuth = props => {
    const { currentUser } = useSelector(mapState)
    const history = useHistory()

    useEffect(()=> {
        // if user props is empty, send to login pg.
        if (!currentUser){
            history.push('/login')
        }
    }, [currentUser])

    // return true
    return currentUser
};

export default userAuth