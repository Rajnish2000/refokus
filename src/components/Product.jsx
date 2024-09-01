import Button from "./Button";

function Product({ elem, pointerMover, index, pos }) {
  return (
    <div className={`w-full text-white items-center py-8`}>
      <div
        onMouseEnter={() => pointerMover(index)}
        className={`${
          pos + 1 == elem.id
            ? elem.background + " duration-[2000ms] ease-in-out"
            : ""
        } py-6 max-w-screen-xl mx-auto max-h-[43vh] flex justify-between items-center px-10`}
      >
        <h1 className="text-5xl capitalize font-regular">{elem.title}</h1>
        <img
          src={elem.url}
          className="w-60  hover:shadow-slate-100 shadow-2xl duration-1000 delay-50"
        />
        <div className="dets w-1/3">
          <p className="mb-10">{elem.description}</p>
          <div className="flex items-center gap-5 rounded-md">
            {elem.live && <Button />}
            {elem.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
