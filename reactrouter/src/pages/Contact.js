import { useLocation } from "react-router-dom"
export default function Contact(){
    //expected ro return ?key=value
    const queryString=useLocation().search;
    console.log(queryString)
    //now , we could retreive the data with its key like so
    const queryParams=new URLSearchParams(queryString);
    const name = queryParams.get('name');
    console.log()
    return (
        <div>
            <h2>Contact</h2>
            <h2>Hi {name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?</p>
        </div>
    )
}