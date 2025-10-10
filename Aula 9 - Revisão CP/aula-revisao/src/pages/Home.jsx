import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const API = import.meta.env.VITE_GIITHUB_API

  useEffect(()=> {
    fetch(`${API}react$per_page=5`)
    .then(res => res.json())
    .then(data => setReactRepos(data.items))
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
    </div>
  );
}
