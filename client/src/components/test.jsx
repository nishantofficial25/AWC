import { useState, useEffect, useRef, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router-dom";
// Mock data generator to simulate MongoDB responses
/* const generateMockData = (page, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [];
      const start = page * limit;
      for (let i = start; i < start + limit; i++) {
        items.push({
          _id: `item_${i}`,
          title: `Post ${i + 1}`,
          description: `This is the description for post ${
            i + 1
          }. It contains some sample content to demonstrate infinite scrolling.`,
          createdAt: new Date(Date.now() - i * 3600000).toISOString(),
        });
      }

      Simulate end of data after 50 items
      resolve({
        data: items,
        hasMore: start + limit < 50,
      });
    }, 800);
  });
}; */

export default function InfiniteScrollApp(props) {
  const { id } = useParams();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredImg, setFilteredImg] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const fetchingRef = useRef(false);
  const ITEMS_PER_PAGE = 2;

  // Fetch data function
  const fetchData = useCallback(
    async (pageNum) => {
      if (loading || fetchingRef.current) return;

      fetchingRef.current = true;
      setLoading(true);
      try {
        // ⭐ REPLACE THIS WITH YOUR ACTUAL API ENDPOINT ⭐
        const response = await fetch(
          `${
            import.meta.env.VITE_SERVER_URL
          }/products?page=${pageNum}&limit=${ITEMS_PER_PAGE}`
        );
        const data = await response.json();

        // For testing with mock data, use this instead:
        /* const result = await generateMockData(pageNum, ITEMS_PER_PAGE); */
        setAllData((prev) => [...prev, ...data.details]);
        setFilteredData((prev) => [...prev, ...data.details]);
        setFilteredImg((prev) => [...prev, ...data.images]);
        /* setItems((prev) => [...prev, ...result.details]); */
        setHasMore(data.hasMore);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        fetchingRef.current = false;
      }
    },
    [loading]
  );

  // Initial load
  useEffect(() => {
    fetchData(0);
  }, []); // Empty dependency array - only runs once

  // Intersection Observer callback
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => {
            const nextPage = prev + 1;
            fetchData(nextPage);
            return nextPage;
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, fetchData]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Infinite Scroll Demo
          </h1>
          <p className="text-gray-600">
            Scroll down to load more items automatically
          </p>
        </div>

        <div className="space-y-4">
          {filteredData.map((item, index) => {
            const isLastItem = filteredData.length === index + 1;

            return (
              <div
                key={item._id}
                ref={isLastItem ? lastItemRef : null}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-3">{item.price}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>no</span>
                </div>
              </div>
            );
          })}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
            <span className="ml-2 text-gray-600">Loading more items...</span>
          </div>
        )}

        {!hasMore && items.length > 0 && (
          <div className="text-center py-8 text-gray-600 bg-white rounded-lg shadow-md mt-4">
            <p className="text-lg font-medium">🎉 You've reached the end!</p>
            <p className="text-sm mt-2">No more items to load</p>
          </div>
        )}
      </div>
    </div>
  );
}
