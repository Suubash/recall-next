import React from "react";
import Layout from "../../Layout/Layout";

export async function getStaticProps() {
  const photos = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((res) => res.json());

  return {
    props: {
      photos,
    },
  };
}

function Photos({ photos }) {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-gray-100 h-52 flex items-center justify-center text-center p-2 cursor-pointer hover:scale-[1.05] hover:text-green-600 transition"
          >
            <p className="">{photo.title}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Photos;
