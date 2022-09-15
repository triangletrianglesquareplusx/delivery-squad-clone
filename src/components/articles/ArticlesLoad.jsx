import { articles } from "../data/articles";
import { Link } from "react-router-dom";

export default function ArticlesLoad() {
  return (
    <>
      <div className="container mt-8 mb-8">
        <h1 className="relative block mb-6 font-bold text-3xl md:text-4xl text-center after:block after:bg-coral after:mt-3 after:mx-auto after:mb-0 after:w-20 md:after:w-28 after:h-1 md:after:h-1.5 after:rounded-md after:content-['']">
          Articles
        </h1>
        <p className="block text-coral font-medium text-base md:text-lg text-center">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor
        </p>
      </div>
      <div className="container p-8 md:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {articles.map((element) => {
          return (
            <div
              className="rounded-3xl overflow-hidden shadow-box"
              key={element.id}
            >
              <img src={element.Image} alt="Item" />
              <div className="p-6">
                <p className="mt-2 mb-3 text-2xl font-medium text-neutral-700">
                  {element.Title}
                </p>
                <p className="text-sm text-zinc-500">{element.Description}</p>
                <Link
                  to={`/articles/${element.slug}`}
                  className="relative block mt-8 mb-2 p-3 bg-coral text-white font-medium text-base uppercase text-center rounded-some transition-all hover:bg-black before:absolute before:top-0 before:bottom-0 before:right-3.5 before:m-auto before:w-8 before:h-8 before:font-mono before:text-xl before:content-['>']"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
