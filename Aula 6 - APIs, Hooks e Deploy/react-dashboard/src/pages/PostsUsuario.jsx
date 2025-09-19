import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PostUsuario(){

    const parametros = useParams();

    const [post, setPosts] = useState([]);
    
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?usersId=${parametros.id}`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }, []);

    return (
        <>
            {post.map(pegaItem => (
                <div className="bg-gray-500 text-white mb-4 p-4">
                    <h2>{pegaItem.title}</h2>
                </div>
            ))}
        </>
    )

}