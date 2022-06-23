import './header.css';
import { setSubreddit, subSelector } from '../../slices/articlesSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/exports';
import { fetchArticles } from '../../slices/articlesSlice';

export const Header = (props) => {   
    const searchTerm = useSelector(subSelector);
    const dispatch = useDispatch();
    const updateSearch = (term) => {
        dispatch(setSubreddit(term.target.value))
        dispatch(fetchArticles(searchTerm))
    }
    return (
        <div className='header-container'>
            <a href='/' className='homePage'>
            <div className='title-container'>
                <h2 id='pageTitle'> Reddit Portal </h2>
                <h4 className='h4'> You Are Viewing The Top Posts from {searchTerm} </h4>
            </div>
            </a>
            <div className='searchbar'>
                <h4 className='h4'> Choose Another Subreddit </h4>
                <input type='text' className="subredditSearch" value={searchTerm} onChange={updateSearch} />
            </div>
        </div>
      
    );
};

export default Header;

