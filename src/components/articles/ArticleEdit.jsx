import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export default function ArticleEdit({article, setEditbox}) {

    const [image, setImage] = useState(article.Image);
    const [title, setTitle] = useState(article.Title);
    const [description, setDecsription] = useState(article.Description);
    const [slug, setSlug] = useState(article.slug);

    function updateArticle() {
        const articleUpdate = doc(db, "articles", article.key)
        updateDoc(articleUpdate, {
            Image: image,
            Title: title,
            Description: description,
            slug: slug
            })
        .catch(alert("Error updating the database"));
    }

    return(
        <div className="p-4">
            <p className="mb-2 font-bold">Image URL</p>
            <input className="border border-solid border-gray-400 p-1 w-64 max-w-full" type="text" defaultValue={image} onChange={event => {setImage(event.target.value);}}/>
            <p className="mt-8 mb-2 font-bold">Title</p>
            <input className="border border-solid border-gray-400 p-1 w-64 max-w-full" type="text" defaultValue={title} onChange={event => {setTitle(event.target.value);}}/>
            <p className="mt-8 mb-2 font-bold">Description</p>
            <textarea className="border border-solid border-gray-400 py-1 px-2 min-w-1/2 max-w-full min-h-box resize [word-break:break-word]" type="text" defaultValue={description} onChange={event => setDecsription(event.target.value)}/>
            <p className="mt-8 mb-2 font-bold">Slug</p>
            <input className="mb-8 border border-solid border-gray-400 p-1 w-64 max-w-full" type="text" defaultValue={slug} onChange={event => {setSlug(event.target.value);}}/>
            <br/>
            <button className="mr-2 mb-2 py-2 px-8 bg-coral text-white font-medium text-sm uppercase text-center rounded-some transition-all hover:bg-black" onClick={updateArticle}>Update</button>
            <button className="mb-2 py-2 px-8 bg-coral text-white font-medium text-sm uppercase text-center rounded-some transition-all hover:bg-black" onClick={()=>setEditbox(false)}>Cancel</button>
        </div>
    )
}