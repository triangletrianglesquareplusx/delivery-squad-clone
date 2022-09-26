import { useState, useEffect } from "react";
import { db, storage } from "../../firebase/firebase-config";
import { collection, onSnapshot, query, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ArticleEdit from "./ArticleEdit";
import ArticleCreate from "./ArticleCreate";

export default function ArticlesTable() {
    
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [editbox, setEditbox] = useState("");
    const [createbox, setCreatebox] = useState(false);
  
    useEffect(() => {
      const getArticlesFromFirebase = [];
      const getArticles = query(collection(db, "articles"));
      const loadArticles = onSnapshot(getArticles, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            getArticlesFromFirebase.push({
                ...doc.data(), 
                key: doc.id, 
          });
          setArticles(getArticlesFromFirebase);
          setLoading(false);
        });});
    
      return () => loadArticles ();
    }, [loading]);
  
    if (loading) {
      return (     
        <div className="container mx-auto my-8 text-center">
            <h2>Loading Articles...</h2>
        </div>
        )
    }

    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `articles-images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };
    
    return (           
            <div className="container mx-auto mb-8">
            <table className="block">
                <thead className="block">
                    <tr className="grid grid-cols-4 text-left">
                            <th className="p-2 border border-solid border-gray-300 border-b-0 border-r-0 text-center">Image</th>
                            <th className="p-2 border border-solid border-gray-300 border-b-0 border-r-0 text-center">Title</th>
                            <th className="p-2 border border-solid border-gray-300 border-b-0 text-center">Description</th>
                            <th className="p-2 border border-solid border-gray-300 border-b-0 text-center">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => {
                        return(<>
                        <tr className="grid grid-cols-4 text-left" key={article.id}>
                            {article.Image===""?
                                <>
                                <td  className="p-2 border border-solid border-gray-300 border-r-0 break-all text-sm"> 
                                    <input type="file" onChange={(event) => {setImageUpload(event.target.files[0]);}}/>
                                    <button onClick={uploadFile}> Upload Image</button>
                                    {imageUrls.map((url) => {
                                        article.data.Image = imageUrls;
                                        return <img src={url} alt="{url}"/>;
                                    })}
                                    </td>
                                </>:                        
                            <td className="p-2 border border-solid border-gray-300 border-r-0 break-all text-sm">{article.Image}</td>
                            }
                        <td className="p-2 border border-solid border-gray-300 border-r-0 break-all text-sm">{article.Title}</td>
                        <td className="p-2 border border-solid border-gray-300 break-all text-sm">{article.Description}</td>
                        <td className="p-2 border border-solid border-gray-300 break-all text-sm">
                          <button className="mr-2 hover:text-coral transition-all" onClick={() => setEditbox(article.key)}>Edit</button>/
                          <button className="ml-2 hover:text-coral transition-all" onClick={() => deleteDoc(doc(db, "articles", article.key))}>Delete</button>                    
                        </td>
                        </tr>  
                        {editbox === article.key && 
                          <tr className="grid grid-cols-1">
                            <td className="p-2 border border-solid border-gray-300 border-r-0 break-all text-sm">
                              <ArticleEdit article={article} setEditbox={setEditbox}/>
                            </td>
                          </tr>}
                        </>)
                    })}
            </tbody>
            </table>
           
            {createbox === true ? 
              <ArticleCreate setCreatebox={setCreatebox}/> :
              <button className="mt-8 mr-2 mb-2 py-2 px-8 bg-coral text-white font-medium text-sm uppercase text-center rounded-some transition-all hover:bg-black" onClick={() => setCreatebox(true)}>Create Article</button> 
            }
            </div> 
    )
}