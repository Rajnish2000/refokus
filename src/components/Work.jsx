import { useScroll } from "framer-motion";
import { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7f33bdfd7f713ff552d_Singularity%20-%204%203-p-800.webp",
      top: "30%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp",
      top: "32%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d000c5875a51723e197f_Brightwave%20-%204%203-p-800.webp",
      top: "40%",
      left: "36%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203.webp",
      top: "37%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203.webp",
      top: "45%",
      left: "40%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (latest) => {
    function showImages(imgList) {
      setImages((prev) => {
        return prev.map((item, index) => {
          if (imgList.indexOf(index) === -1)
            return { ...item, isActive: false };
          else return { ...item, isActive: true };
        });
      });
    }
    switch (Math.floor(latest * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 5:
        showImages([0, 1, 2, 3, 4]);
        break;
    }
  });
  return (
    <div className="flex w-full justify-center items-center">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tighter">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images != undefined &&
            images.map((elem, index) => {
              return (
                elem.isActive && (
                  <img
                    className="w-60 rounded-md"
                    src={elem.url}
                    key={index}
                    alt="no image"
                    style={{
                      top: elem.top,
                      left: elem.left,
                      position: "absolute",
                    }}
                  />
                )
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Work;
