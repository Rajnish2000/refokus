function Strip({ elem }) {
  return (
    <div className="w-[16.66%]">
      <div className="items-center border-t-[1px] border-b-[1px] border-r-[1px] border-slate-700 flex justify-between px-4 box-border font-medium text-lg py-4">
        <img className="bg-cover max-h-7" src={elem.url} />
        <span className="text-md">{elem.number}</span>
      </div>
    </div>
  );
}

export default Strip;
