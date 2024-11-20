import { Carousel } from "flowbite-react";

export function Component(props) {
  const { images } = props;
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      {images.map((value) => {
        return <Carousel>{value}</Carousel>;
      })}
    </div>
  );
}
