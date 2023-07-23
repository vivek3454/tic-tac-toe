import { FaRegCircle, FaTimes} from 'react-icons/fa'

const Icon = ({name}) => {
    if (name === 'circle') {
        return <FaRegCircle style={{fontSize: '50px'}} />
    }
    else if (name === 'cross') {
        return <FaTimes style={{fontSize: '50px'}} />
    }
}

export default Icon