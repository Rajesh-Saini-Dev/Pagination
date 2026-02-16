import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Posts = () => {
  const [images, setImages] = useState([]);
  const [pageNo, setPageNo] = useState(3);
  const limit = 8;

  useEffect(() => {
    fetchImages();
  }, [pageNo]);

  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=${limit}`,
      );
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  return (
    <div className="h-full bg-gray-300 py-10 px-10 lg:px-48">
      {/* <h1 className="text-2xl font-bold text-center mb-6">Image Pagination</h1> */}

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white rounded-t-lg shadow hover:shadow-lg transition"
          >
            <img
              src={`https://picsum.photos/id/${img.id}/300/200`}
              alt={img.author}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <p className="text-lg text-center py-4 font-medium">{img.author}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
};

export default Posts;
