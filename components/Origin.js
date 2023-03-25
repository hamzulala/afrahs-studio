import React from "react";
import MapFx from "./MapFx";

const Origin = () => {
  return (
    <div className="flex flex-row space-x-10 m-5">
      <div className="h-1/3 w-1/3">
        <MapFx
          src1="/images/map/chennai_mono.png"
          src2="/images/map/chennai_color.png"
          alt="Chennai Map"
        />
      </div>
      <div className="w-1/3 h-full space-y-5">
        <h1 className="text-4xl">Origin</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          eleifend enim at iaculis efficitur. Etiam nulla massa, aliquam a dolor
          sit amet, efficitur feugiat augue. Mauris accumsan mauris id lacinia
          finibus. Sed in lectus ut nulla commodo euismod ut eu lacus. Phasellus
          vel orci a justo vulputate ultrices sit amet quis lorem. Pellentesque
          ac magna mollis, pulvinar urna ultrices, imperdiet sapien. Nam sit
          amet justo porttitor, elementum diam at, faucibus erat. Maecenas
          cursus urna et felis ornare feugiat. Suspendisse lacinia ut erat et
          pretium. Sed rhoncus feugiat tellus. Donec elementum tristique mi.
          Duis erat ante, dapibus at metus in, semper gravida massa. In eu lacus
          a arcu eleifend facilisis euismod id velit. Phasellus efficitur massa
          urna. Fusce scelerisque arcu dolor, non dictum nunc feugiat vel.
          Integer quis euismod sapien. Aliquam scelerisque non quam nec
          placerat. Suspendisse consequat euismod tincidunt. Mauris eu interdum
          enim. Morbi aliquam et tellus at consectetur. Aenean interdum non leo
          vitae tempus. Proin cursus lectus ac leo rhoncus malesuada. Etiam
          dignissim efficitur magna sed laoreet. Duis accumsan semper lacus a
          ullamcorper.
        </p>
      </div>
    </div>
  );
};

export default Origin;
