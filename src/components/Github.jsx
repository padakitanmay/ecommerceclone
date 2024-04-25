import { useLoaderData } from 'react-router-dom';
const Github = () => {
const data=useLoaderData()
console.log(data)
    // const [data,setData]=useState();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amey-kachare')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         // console.log(data)
    //         setData(data)
    //         // console.log(dataa.followers)
    //     })
    // })

  return (
    <div className='bg-gray-700 text-white text-3xl m-4 text-center'>
      Github Followers : {data.followers}
      <img className=' w-25 h-25' src={data.avatar_url} ></img>
    </div>
  )
}


export const gitInfoLoader = async () => {
    const response=await fetch('https://api.github.com/users/amey-kachare')
    return response.json()
}
export default Github