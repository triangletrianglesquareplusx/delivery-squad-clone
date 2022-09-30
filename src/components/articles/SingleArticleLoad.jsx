import React from "react"
import { useParams, Link } from "react-router-dom"
import { db } from "../../firebase/firebase-config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function SingleArticleLoad() {
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const {slug} = useParams();

    useEffect(() => {
        const getArticle = query( collection(db, "articles"), where("slug", "==", slug));            
        const loadArticle = onSnapshot(getArticle, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const getArticleFromFirebase = {
                    ...doc.data(),
                    key: doc.id,
                };

            setArticle(getArticleFromFirebase);
            setLoading(false);
              
        });});
          
            return () => loadArticle ();
          }, [loading]);
          
        if (loading) {
            return (        
            <div className="container mx-auto my-8 text-center">
                <h2>Loading Article...</h2>
            </div>
            )
        }
    
    return (
        <div className='container mx-auto mt-8 mb-8 text-center'>
            <div className='details-img'>
                <img className="block mx-auto mb-8 max-w-full" src={article.Image} alt={article.Title} />
            </div>
            <div className='details-info'>
                <h1 className="relative block mb-6 font-bold text-2xl md:text-4xl text-center after:block after:bg-coral after:mt-3 after:ml-auto after:mr-auto after:mb-0 after:w-20 md:after:w-28 after:h-1 md:after:h-1.5 after:rounded-md after:content-['']">{article.Title}</h1>
                <p className="text-sm md:text-base">{article.Description}</p>
            </div>
            <Link className="block mt-8 mx-auto mb-8 p-3 w-56 bg-coral text-white font-medium text-base uppercase text-center rounded-some transition-all hover:bg-black" to={`/articles`}>Back</Link>
        </div>
    )
}
