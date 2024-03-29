"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

interface Item {
  nama_karya: string;
  image_url: string;
  harga: number;
}

export default function Main() {
  const [artworksData, setCartData] = useState([]);
  const [shouldRerender, setShouldRerender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getMyArtwork", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setCartData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [shouldRerender]); // Include shouldRerender in the dependency array

  const handleRemoveItem = async (nama_karya) => {
    try {
      const response = await fetch("/api/removeMyArtwork", {
        method: "DELETE",
        body: JSON.stringify({
          nama_karya: nama_karya,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      // Trigger a re-render by updating shouldRerender
      setShouldRerender((prev) => !prev);
    } catch (error) {
      console.error("Error removing item", error);
    }
  };

  console.log(artworksData);

  return (
    <div className="h-[90vh] w-[100vw] bg-neutral relative flex row">
      <div className="h-[90vh] w-[100%] flex flex-col items-center pt-[50px]">
        <div className="h-[40px] w-[850px] mb-4 text-[30px] font-medium">
          <p>My Artworks</p>
        </div>
        <div className="h-[70vh] w-[850px] bg-scroll overflow-y-scroll">
          {artworksData.map((item: Item) => (
            <div key={item.nama_karya}>
              <div className="h-[200px] w-[800px] rounded-[10px] bg-[#B9BFC9] mb-[20px] grid grid-cols-9 justify-items-center content-center items-center">
                <div className="h-[150px] w-[120px] p-4 bg-white rounded-[10px] ml-2 col-span-2 flex">
                  <div className="m-auto">
                    <Image
                      src={item.image_url}
                      alt={item.nama_karya}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="text-[18px] font-semibold col-span-3">
                  <p>{item.nama_karya}</p>
                </div>
                <div className="text-[18px] font-semibold col-span-3">
                  <p>{item.harga.toLocaleString()}</p>
                </div>
                <button onClick={() => handleRemoveItem(item.nama_karya)}>
                  <RemoveCircleRoundedIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
