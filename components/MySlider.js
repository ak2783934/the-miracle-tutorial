import React from "react";

const MySlider = () => {
  const images = [
    "/firstImg.jpg",
    "/secondImg.jpg",
    "/thirdImg.jpg",
    "/fourthImg.jpg",
    "/fifthImg.jpg",
  ];

  const Carousel = () => {
    const [currentImage, setCurrentImage] = React.useState(0);

    const refs = images.reduce((acc, val, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});

    const scrollToImage = (i) => {
      setCurrentImage(i);
      // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
      // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
      // your current view! To do so we pass an index of the image, which is then use to identify our current
      // image's ref in 'refs' array above.
      refs[i].current.scrollIntoView({
        //     Defines the transition animation.
        behavior: "smooth",
        //      Defines vertical alignment.
        block: "nearest",
        //      Defines horizontal alignment.
        inline: "start",
      });
    };

    // Some validation for checking the array length could be added if needed
    const totalImages = images.length;

    // Below functions will assure that after last image we'll scroll back to the start,
    // or another way round - first to last in previousImage method.
    const nextImage = () => {
      if (currentImage >= totalImages - 1) {
        scrollToImage(0);
      } else {
        scrollToImage(currentImage + 1);
      }
    };

    const previousImage = () => {
      if (currentImage === 0) {
        scrollToImage(totalImages - 1);
      } else {
        scrollToImage(currentImage - 1);
      }
    };

    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
    const arrowStyle =
      "absolute text-white text-2xl z-10 h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

    // Let's create dynamic buttons. It can be either left or right. Using
    // isLeft boolean we can determine which side we'll be rendering our button
    // as well as change its position and content.
    const sliderControl = (isLeft) => (
      <button
        type="button"
        onClick={isLeft ? previousImage : nextImage}
        className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
        style={{ top: "40%" }}
      >
        <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
          {isLeft ? "◀" : "▶"}
        </span>
      </button>
    );

    return (
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full">
          <div
            style={{
              display: "inline-flex",
              overflowX: "hidden",
              scrollSnapType: "x",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className="flex-shrink-0 w-full " key={img} ref={refs[i]}>
                <img src={img} className="object-contain w-full" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <Carousel />
    </div>
  );
};

export default MySlider;
