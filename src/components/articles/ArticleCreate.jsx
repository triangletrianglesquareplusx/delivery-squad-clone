import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export default function ArticleCreate({setCreatebox}) {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDecsription] = useState();
    const [slug, setSlug] = useState();

    function createArticle() {
        const setArticle = collection(db, "articles")
        addDoc(setArticle, {
            Image: image,
            Title: title,
            Description: description,
            slug: slug
            });
            setCreatebox(false)
    }

    return(
        <div className="p-4">
            <h2 className="my-8 font-bold text-2xl">Create an Article</h2>
            <p className="mb-2 font-bold">Image URL</p>
            <input className="border border-solid border-gray-400 p-1 w-64 max-w-full" type="text" onChange={event => {setImage(event.target.value);}}/>
            <p className="mt-8 mb-2 font-bold">Title</p>
            <input className="border border-solid border-gray-400 p-1 w-64 max-w-full" type="text" onChange={event => {setTitle(event.target.value);}}/>
            <p className="mt-8 mb-2 font-bold">Description</p>
            <textarea className="border border-solid border-gray-400 py-1 px-2 min-w-full md:min-w-1/2 max-w-full min-h-box resize [word-break:break-word]" type="text" onChange={event => setDecsription(event.target.value)}/>
            <p className="mt-8 mb-2 font-bold">Slug</p>
            <input className="mb-8 border border-solid border-gray-400 p-1 w-64 max-w-full" type="text" onChange={event => {setSlug(event.target.value);}}/>
            <br/>
            <button className="mr-2 mb-2 py-2 px-8 bg-coral text-white font-medium text-sm uppercase text-center rounded-some transition-all hover:bg-black" onClick={createArticle}>Create</button>
            <button className="mb-2 py-2 px-8 bg-coral text-white font-medium text-sm uppercase text-center rounded-some transition-all hover:bg-black" onClick={()=>setCreatebox(false)}>Cancel</button>
        </div>
    )
}