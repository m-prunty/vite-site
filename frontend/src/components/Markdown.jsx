import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import Axios from "axios";

export const MDRender = (props) =>
{
  const [md, setmd] = useState("");
  
  useEffect(() => {
    Axios.get(props.filename).then((res) => { 
      setmd(res.data);

    });  },[]);
  console.log(md);
  return (
    <div>
      <ReactMarkdown children={md} />
    </div>
  );
};
