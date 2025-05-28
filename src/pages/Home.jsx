import CocktailCard from '../components/CocktailCard';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useData from '../hooks/useData'

export default function Home() {
  const { data, loading, error } = useData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
  console.log(data)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error
      message={error}
    />
  }

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



