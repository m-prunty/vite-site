import { useState } from "react";
import  axios  from "../axiosConfig"

function ButAddOrder(props){
  const [count, setCount] = useState(1);
  const book = props.book
  return(
    <div> 
      <button onClick={() => {
                count > 1 ? setCount(count - 1) : setCount(1);
        }}>-</button>

        <button 
          className="buy"
          onClick={() => {
            console.log(book)
            book.count = count
            console.log(book)
          //  axios.get
            //return (props.book)
        }}
        >
            Order: {count}
        </button>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
  )
};

export default  ButAddOrder;
//    <button className="delete" onClick={() => handleDelete(book.bookid)}>Delete</button>
