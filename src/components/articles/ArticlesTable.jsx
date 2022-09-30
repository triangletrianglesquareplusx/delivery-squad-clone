import { useState, useEffect } from "react";
import { db, storage } from "../../firebase/firebase-config";
import {
  collection,
  onSnapshot,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ArticleEdit from "./ArticleEdit";
import ArticleCreate from "./ArticleCreate";
import { TbArrowsDownUp } from "react-icons/tb";

export default function ArticlesTable() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [editbox, setEditbox] = useState("");
  const [createbox, setCreatebox] = useState(false);
  const [sort, setSortBy] = useState("");
  const [reverseSort, setReverseSort] = useState(false);
  const [search, searchBy] = useState("");
  const [updated, setUpdated] = useState(0);

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
        console.log(articles);
      });
    });
    console.log(articles);
    return () => loadArticles();
  }, [loading]);

  useEffect(() => {
    setLoading(true);
  }, [updated]);

  if (loading) {
    return (
      <div className="container mx-auto my-8 text-center">
        <h2>Loading Articles...</h2>
      </div>
    );
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

  function sortTable(e) {
    if (e.target.value !== sort) {
      setSortBy(e.target.value);
      setReverseSort(false);
    } else {
      setReverseSort(!reverseSort);
    }
  }

  return (
    <div className="px-4 mb-8 overflow-x-auto">
      <input
        className="max-w-full py-3 pl-12 pr-4 mb-8 text-sm bg-no-repeat border border-gray-400 border-solid w-96 bg-search bg-left-1"
        placeholder="Search"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchBy(event.target.value);
          }
        }}
      />
      <table className="block w-[600px] md:w-auto">
        <thead className="block">
          <tr className="grid grid-cols-4 text-left">
            <th className="p-2 text-center border border-r-0 border-gray-300 border-solid">
              <button
                className="flex items-center justify-center w-full transition-all hover:text-coral"
                value="Image"
                onClick={sortTable}
              >
                Image <TbArrowsDownUp className="ml-2" />
              </button>
            </th>
            <th className="p-2 text-center border border-r-0 border-gray-300 border-solid">
              <button
                className="flex items-center justify-center w-full transition-all hover:text-coral"
                value="Title"
                onClick={sortTable}
              >
                Title <TbArrowsDownUp className="ml-2" />
              </button>
            </th>
            <th className="p-2 text-center border border-r-0 border-gray-300 border-solid">
              <button
                className="flex items-center justify-center w-full transition-all hover:text-coral"
                value="Description"
                onClick={sortTable}
              >
                Description <TbArrowsDownUp className="ml-2" />
              </button>
            </th>
            <th className="p-2 text-center border border-b-0 border-gray-300 border-solid">
              Edit/Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {articles
            .filter((result) => {
              if (search === "") {
                return result;
              } else
                return (
                  result.Title.toLowerCase().includes(search.toLowerCase()) ||
                  result.Description.toLowerCase().includes(
                    search.toLowerCase()
                  )
                );
            })
            .sort(function (a, b) {
              if (reverseSort === false) {
                if (a[sort] < b[sort]) return -1;
                if (a[sort] > b[sort]) return 1;
                return 0;
              } else {
                if (a[sort] > b[sort]) return -1;
                if (a[sort] < b[sort]) return 1;
                return 0;
              }
            })
            .map((article) => {
              return (
                <>
                  <tr className="grid grid-cols-4 text-left" key={article.id}>
                    {article.Image === "" ? (
                      <>
                        <td className="p-2 text-sm break-all border border-r-0 border-gray-300 border-solid">
                          <input
                            type="file"
                            onChange={(event) => {
                              setImageUpload(event.target.files[0]);
                            }}
                          />
                          <button onClick={uploadFile}> Upload Image</button>
                          {imageUrls.map((url) => {
                            article.data.Image = imageUrls;
                            return <img src={url} alt="{url}" />;
                          })}
                        </td>
                      </>
                    ) : (
                      <td className="p-2 text-sm break-all border border-t-0 border-r-0 border-gray-300 border-solid">
                        {article.Image}
                      </td>
                    )}
                    <td className="p-2 text-sm break-all border border-t-0 border-r-0 border-gray-300 border-solid">
                      {article.Title}
                    </td>
                    <td className="p-2 text-sm break-all border border-t-0 border-r-0 border-gray-300 border-solid">
                      {article.Description}
                    </td>
                    <td className="p-2 text-sm break-all border border-t-0 border-gray-300 border-solid">
                      <button
                        className="mr-2 transition-all hover:text-coral"
                        onClick={() => setEditbox(article.key)}
                      >
                        Edit
                      </button>
                      /
                      <button
                        className="ml-2 transition-all hover:text-coral"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this item?"
                            )
                          )
                            deleteDoc(doc(db, "articles", article.key));
                          setUpdated(updated + 1);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  {editbox === article.key && (
                    <tr className="grid grid-cols-1">
                      <td className="p-2 text-sm break-all border border-r-0 border-gray-300 border-solid">
                        <ArticleEdit
                          article={article}
                          setEditbox={setEditbox}
                          setUpdated={setUpdated}
                          updated={updated}
                        />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </table>

      {createbox === true ? (
        <ArticleCreate
          setCreatebox={setCreatebox}
          setUpdated={setUpdated}
          updated={updated}
        />
      ) : (
        <button
          className="px-8 py-2 mt-8 mb-2 mr-2 text-sm font-medium text-center text-white uppercase transition-all bg-coral rounded-some hover:bg-black"
          onClick={() => setCreatebox(true)}
        >
          Create Article
        </button>
      )}
    </div>
  );
}
