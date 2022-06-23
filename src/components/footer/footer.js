import './footer.css';
import light from './Light.png';
import dark from './Dark.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../slices/themeSlice';
import { themeSelector } from '../../slices/themeSlice';

export const Footer = (props) => {   
    const dispatch = useDispatch();
    const selector = useSelector(themeSelector);

    return (
        <div>
            <div className='footer-container'>
                { selector === 'Dark' ? 
                <div>
                    <img className='themeToggle'
                    id='lightButton'
                    onClick={() => dispatch(toggleMode(''))} 
                    src={light}    
                    alt='Toggle Light/Dark Mode'>
                    </img>
                    <h6 className='themeText' onClick={() => dispatch(toggleMode(''))}> {selector} </h6>
                </div> 
                :
                <div>
                    <img className='themeToggle'
                    id='darkButton'
                    onClick={() => dispatch(toggleMode(''))} 
                    src={dark}    
                    alt='Toggle Light/Dark Mode'>
                    </img>
                    <h6 className='themeText' onClick={() => dispatch(toggleMode(''))}> {selector} </h6>
                </div>};
            </div>
        </div>
    );
};

export default Footer;