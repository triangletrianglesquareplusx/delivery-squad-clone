import React from "react";
import ArticlesTable from "../../components/articles/ArticlesTable";

function ArticlesAdministrationPage() {
  return (
    <div className="container my-10 mx-auto">
      <h2 className="mb-8 font-bold text-2xl text-center">Articles Administration Page</h2>      
      <ArticlesTable/>

    </div>
  );
}

export default ArticlesAdministrationPage;
