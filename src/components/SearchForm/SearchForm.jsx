import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const value = event.target.elements.search.value.trim();
        console.log("value >>", value);
        onSubmit(value);
    }
    return (      
        <form onSubmit={handleSubmit}>
            <input 
                className={css.searchInput}    
                name="search"
                type="text"
                placeholder='search movie' />
            <button className={css.searchBtn} type="submit" >Submit</button>
        </form>
  )
}


            {/* className={css.searchInput}
                    //<form className={css.searchForm} onSubmit={handleSubmit}>
            <button className={css.searchBtn} type="submit" >Submit</button> */}