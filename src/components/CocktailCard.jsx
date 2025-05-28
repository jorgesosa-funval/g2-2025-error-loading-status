export default function CocktailCard({ cocktail }) {
  const {strDrink, strDrinkThumb} = cocktail 
  return (
    <figure className='w-80 h-92 relative border border-gray-400 shadow-md rounded-sm overflow-hidden'>
      <img src={strDrinkThumb} alt={strDrink} className='w-full h-full' />
      <figcaption className='bg-slate-950/70 text-white text-center absolute bottom-0 w-full py-4 px-2'>
        {strDrink}
      </figcaption>
    </figure>
  )
}