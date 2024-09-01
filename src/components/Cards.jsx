import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full py-5 flex justify-center items-center">
      <div className="w-[60vw] mx-auto flex gap-2 hover:duration-700 hover:gap-1">
        <Card width={"basis-1/3"} msg="Who we are" show={false} clr={0} />
        <Card
          width={"basis-2/3"}
          msg="Let`s get to it. together."
          show={true}
          clr={1}
        />
      </div>
    </div>
  );
};

export default Cards;
