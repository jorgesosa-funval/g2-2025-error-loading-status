import useData from '../hooks/useData'

export default function Home() {
  const { data, loading, error } = useData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
  console.log(data)
  return (
    <div className='w-full min-h-screen bg-gray-50 flex flex-wrap p-6 gap-2'>
      {
    
        data?.drinks?.map((cocktail) => {
          return <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
          />
        })
      }
    </div>
  )
}


export function CocktailCard({ cocktail }) {
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
