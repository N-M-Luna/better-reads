function Book({title, author, image='', publisher='',  description=''}) {

    //Add a "buy on amazon" link and a button to add to personal library
    return (
        <div className="book-div">
            <img className="book-cover" src={image} alt={"Book cover"}/>
            <p>{title}</p>
            <p>by {author}</p>
        </div>
)}

export default Book;