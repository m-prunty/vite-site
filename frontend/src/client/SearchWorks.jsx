import BookItem from "../components/BookItem";
import "../styles/Books.css";

const SearchWorks = ({works}) =>{
  console.log(works);
  return (
     <div className="books">
       <h1> All Books </h1>
       <div className="bookList">
        {works?.map((book, cover_edition_key ) => {
          return  book.cover_edition_key &&(

            <div key={book.cover_edition_key}>
               <BookItem book={book} /> 
            </div>
               );
         })}

       </div>
     </div>
   );
};
/*
         */
export default SearchWorks;
