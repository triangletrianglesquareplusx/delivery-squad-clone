import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot, query } from "firebase/firestore";
import ArticlesTable from "./ArticlesTable";

export default function ArticlesLoad() {
    const [search, searchBy] = useState("");
    const [filter, filterBy] = useState("");
    const [sort, sortBy] = useState("");
    const [sortr, sortByR] = useState("");
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
  
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
    
    const handleFilter = (e) => {
        if (filter === e.target.value) {
            filterBy("")
        }
        else filterBy(e.target.value);
    };

    const handleSort = (e) => {
        if (sort === e.target.value) {
            sortBy("")
        }
        else sortBy(e.target.value);
        sortByR("")
    }

    const handleSortReverse = (e) => {
        if (sortr === e.target.value) {
            sortByR("")
        }
        else sortByR(e.target.value);
        sortBy("")
    }

    return (
        <>
            <div className="container mt-8 mb-8 mx-auto">
                <h1 className="relative block mb-6 font-bold text-3xl md:text-4xl text-center after:block after:bg-coral after:mt-3 after:mx-auto after:mb-0 after:w-20 md:after:w-28 after:h-1 md:after:h-1.5 after:rounded-md after:content-['']">Articles</h1>
                <p className="block text-coral font-medium text-base md:text-lg text-center">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</p>
            </div>
            <div className="container mx-auto p-8 md:pt-12 pb-12">
                <input className="block mx-auto py-3 pl-12 pr-4 w-96 max-w-full bg-search bg-no-repeat bg-left-1 bg-scaledDownWhite text-sm" placeholder="Search in title" onKeyPress={event => {if (event.key === 'Enter') {searchBy(event.target.value);}}}/>
            </div>
            
            <div className="flex flex-wrap container mx-auto mb-4 justify-center items-center">
                <div className="flex md:mx-4 max-w-full bg-lightGray rounded-xl shadow-box">
                    <label className="py-2 pr-4 pl-12 bg-selectedBlue bg-filter bg-no-repeat bg-left-1 text-white text-md rounded-xl">Filter By</label>
                    <div className="flex items-center mx-4">
                        <input value="1" type="checkbox"  checked={filter === "1"} onChange={handleFilter}/>
                        <span className="ml-2">1</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <input value="2" type="checkbox"  checked={filter === "2"} onChange={handleFilter}/>
                        <span className="ml-2">2</span>
                    </div>
                </div>

                <div className="flex md:mx-4 max-w-full bg-lightGray rounded-xl shadow-box">
                    <label className="py-2 pr-4 pl-12 bg-selectedBlue bg-sort bg-no-repeat bg-left-1 text-white text-md rounded-xl">Sort By</label>
                    <div className="flex items-center mx-4">
                        <input value="Title" type="checkbox" checked={sort === "Title"} onChange={handleSort} />
                        <span className="ml-2">Title</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <input value="Title" type="checkbox" checked={sortr === "Title"} onChange={handleSortReverse}/>
                        <span className="ml-2">Title Reverse</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-8 md:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {articles.filter(result => {
                    if (search === "") {return result;}
                    else return result.Title.toLowerCase().includes(search.toLowerCase())})
                .filter(result => {
                    if (filter === "") {return result;}
                    else return result.Title.toLowerCase().includes(filter.toLowerCase())})
                    .sort(function(a, b) {
                        if(sortr==="") {
                        if(a[sort] < b[sort]) return -1;
                           if(a[sort] > b[sort]) return 1;
                           return 0;
                          }
                          if(a[sortr] > b[sortr]) return -1;
                             if(a[sortr] < b[sortr]) return 1;
                             return 0;
                        }
                        )   
                .map((element)=>{return(
                    <div className="rounded-3xl overflow-hidden shadow-box" key={element.id}>
                        <img src={element.Image} alt="Item"/>
                        <div className="p-6">
                            <p className="mt-2 mb-3 text-xl md:text-2xl font-medium text-neutral-700">{element.Title}</p>
                            <p className="text-sm text-zinc-500">{element.Description}</p>
                            <Link to={`/articles/${element.slug}`} className="relative block mt-8 mb-2 p-3 bg-coral text-white font-medium text-base uppercase text-center rounded-some transition-all hover:bg-black before:absolute before:top-0 before:bottom-0 before:right-3.5 before:m-auto before:w-8 before:h-8 before:font-mono before:text-xl before:content-['>']">Read More</Link>
                        </div>
                    </div>)
                })}
            </div>
            <ArticlesTable/>
        </>
    )
}