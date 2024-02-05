import { useEffect, useState } from 'react';
import React from 'react';
import {FaSearch} from 'react-icons/fa';


function Search (){
  const [filteredData, setFilteredData]=useState(' ')
  const [data,setData]=useState([])


 useEffect(()=>{
  if(!filteredData){
    setData([]);
    return;
  }

     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${filteredData}`)
      .then(res=>res.json())
      .then(result=>{
        setData(result);
        // console.log(result)
      })
      .catch(error=>console.log(error));
    },[filteredData])

      
 
const handleChange=(event)=>{
 setFilteredData(event.target.value);
  };

  return (
    <div className=' bg-stone-50 h-screen bg-slate-300 min-[320px]:text-center max-[600px]:bg-sky-300 '>
      <h3 className='bg-zinc-200 text-center pb-8 font-bold text-6xl bg-neutral-800 text-white min-[320px]:text-center max-[600px]:decoration-black'> Dictionary</h3>
          <div className='flex justify-center text-xl my-6 shadow-md '>
              <input placeholder='Type to search...'  
              className='w-52 h-8 bg-stone-50 focus:outline-none '
              type='search'
              value={filteredData}
              onChange={handleChange}
              /> 
              <FaSearch className='bg-stone-50 h-8'/>
             <hr/>
          </div>  
        <div className='text-center text-lg h-12 w-120 '>
          <div className='search-result bg-gray-950 '  >
            {Array.isArray(data) && data.length> 0 ? (
            data.map((entry)=>(
                <div key={entry.word} >
                  <div className='bg-amber-400 text-black'>{entry.word}</div>
                  {entry.phonetics.map((phonetic)=>(
                    <div className='bg-amber-400 text-black' key= {phonetic.text}> phonetic : {phonetic.text} </div>
                  ))}
                 {entry.meanings.map((meaning)=>(
                  <div className='bg-amber-400 text-black'key={meaning.partOfSpeech}>
                    <strong>{meaning.partOfSpeech}</strong>:{meaning.definitions[0].definition}
                    </div>
            ))}
                </div>
                ))
           ): (
      <div className='hover:bg-sky-700 bg-amber-400 text-black'>Search Results</div>
  )}
      </div>
    </div>
  </div>
   
  );
           }
export default Search