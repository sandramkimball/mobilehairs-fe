
export const Validator = (credentials) => {
    let errors = []
    if(credentials.firstName.length < 2){
        errors.push('Please enter a first name') 
    }
    if(credentials.lastName.length < 2){
        errors.push('Please enter a last name') 
    }
    if(credentials.email.length < 7 || !credentials.email.length.contains('\@\g')){
        errors.push('Please enter an email') 
    }
    if(credentials.city === ''){
        errors.push('Please enter a city') 
    }
    if(credentials.state === ''){
        errors.push('Please enter a state') 
    }
    if(credentials.password.length < 7){
        errors.push('Passwords must be a minimum of 7 characters.') 
    }
    if(credentials.confirmPassword !== credentials.password){
        errors.push('Passwords don\'t match.') 
    }

    return errors
}