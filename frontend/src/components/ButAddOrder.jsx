import { useState } from "react";
import { axios}

function ButAddOrder(props){
  const [count, setCount] = useState(1);

  return(
    <div> 
      <button onClick={() => {
                count > 1 ? setCount(count - 1) : setCount(1);
        }}>-</button>

        <button 
          className="buy"
          onClick={() => {
            return (props.book)
            //console.log(props.book)
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
