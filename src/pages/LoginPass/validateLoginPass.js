import { validEmail, passwordLength } from '../../components/constants'

export default function validateLoginPass(userEmail, userPassword) {
    if (userEmail.match(validEmail) && userPassword.length >= passwordLength) {
        return true
    }
    return false
}
