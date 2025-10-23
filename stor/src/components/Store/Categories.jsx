function Categories({categories}) {
    
    const [inputCategories, setInputCategories] = useState('');
    return <>
        <button type="submit" className="btn btn-secondary mx-2" id="categrBtn" onClick={(e) => {e.preventDefault() 
            setInputCategories(e.target.value)}} value={categories} >{categories}</button>;
    </>
}

export default Categories;