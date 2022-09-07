import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
export default function Article() {
  const { id } = useParams();
  const URL = "http://localhost:3000/articles/" + id;
  const { data: article, error, isPending } = useFetch(URL);
  const navigate = useNavigate()
  useEffect(()=>{
    if(error)(
     setTimeout(()=>{
      navigate('/') 
     },2000)
    )
  })

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>  
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
