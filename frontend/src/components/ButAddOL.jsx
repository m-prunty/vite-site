
export default function ButAddOrder(props){
  const [count, setCount] = useState(1);

  return(
    <div> 
      <button onClick={() => setCount(count + 1)}>+</button>

        <button 
          className="buy"
        >
          <Link
            to={`link`}
            style={{ color: "inherit", textDecoration: "none" }}>
            Order: {count}
          </Link>
        </button>
      <button onClick={() => {
                count > 1 ? setCount(count - 1) : setCount(1);
        }}>-</button>
      </div>
  )
};
//    <button className="delete" onClick={() => handleDelete(book.bookid)}>Delete</button>
