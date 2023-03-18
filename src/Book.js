function Book({title, author, image='', publisher='',  description=''}) {//pass on a fn that handles the clicks

    //Add a "buy on amazon" link and a button to add to personal library
    return (
        <div className="book-div">
            <img className="book-cover" src={image} alt={"Book cover"}/>
            <p>{title}</p>
            <p>by {author}</p>
            <button className="add-to-lib-btn">Add to library</button>
        </div>
)}

export default Book;