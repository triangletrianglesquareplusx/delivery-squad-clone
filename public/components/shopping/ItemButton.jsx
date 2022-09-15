export function ItemButton(props) {
  return (
    <div className="border border-purple-700 rounded-md text-purple-700 leading-3 text-xs pt-2 pb-1 pl-4 pr-4  mr-2 mt-4 font-semibold w-24 h-8 hover:cursor-pointer">
      <p>{props.text}</p>
    </div>
  );
}
