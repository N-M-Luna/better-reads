import React from "react";

class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // TODO The button for each book should have the title or book info. This is what needs to be passed on as parameter to add/remove fns
        const { title, author, image, publisher, description, addToLibrary, removeFromLibrary, isInLibrary } = this.props
        const actionButton = isInLibrary ?
            <button className="library-action-btn" onClick={() => removeFromLibrary(title)}>Remove from library</button>
            : <button className="library-action-btn" onClick={() => addToLibrary(this.props)}>Add to library</button>

        return(
        <div className="book-div">
            <img className="book-cover" src={image} alt={"Book cover"} />
            <p>{title}</p>
            <p>by {author}</p>
            {actionButton}
        </div>)
    }
}
    
export default Book;

/* Old code:
function Book({title, author, image, publisher,  description, addToLibrary, removeFromLibrary, isInLibrary}) {

// TODO The button for each book should have the title or book info. This is what needs to be passed on as parameter to add/remove fns -> was very difficult to implement when the component is a function, so I switched.

    const actionButton = isInLibrary? 
    <button className="library-action-btn" onClick={() => removeFromLibrary('Through the looking glass')}>Remove from library</button>
    : <button className="library-action-btn" onClick={() => addToLibrary()}>Add to library</button>

    return (
        <div className="book-div">
            <img className="book-cover" src={image} alt={"Book cover"}/>
            <p>{title}</p>
            <p>by {author}</p>
            {actionButton}
        </div>
)}

export default Book;
*/ 