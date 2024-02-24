import {useState } from 'react';
import React from 'react';
import {FaSearch} from 'react-icons/fa';


function Search (){
  const [searchText, setSearchText]=useState(' ')
  const [definition, setDefinition] = useState('');

  const handleSearch = async ()=>{
    try{
      const res =await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`);
      const data = await res.json();

      if(data.length>0){
        setDefinition(data[0].meanings[0].definitions[0].definition);
      }else{
        setDefinition("Sorry , We couldn't find a word")
      }
    }catch(error){
      console.error('Error',error);
      setDefinition("An error occurred.")
    }
  };
    
  return(
    <div className='bg-slate-100 h-screen'>
      <h1 className='bg-amber-500 text-3xl text-center p-3 px-1'>Dictionary</h1>
      <div className='text-center pt-3.5 '>
        <input placeholder='Type to search...' className='pb-1 w-52 h-8 bg-stone-50 focus:outline-none inline-block'
        type='text'
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}/>
        <FaSearch className='bg-stone-50 h-8 inline-block p-px'/>
        <button className='text-center inline-block' onClick={handleSearch}>Search</button>
      </div>
     
      <h2 className='text-center pt-3.5 invisible '>Search Results</h2>
      <p className='text-center'>{definition}</p>
    </div>
  )
    }
 /*

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`)
      .then(res=>res.json())
      .then(result=>{
        setData(result);
        // console.log(result)
      })


const handleChange=(event)=>{
 setSearchData(event.target.value);
  };

  return (
    <div className=' bg-stone-50 h-screen bg-slate-300 min-[320px]:text-center max-[600px]:bg-sky-300 '>
      <h3 className='bg-zinc-200 text-center pb-8 font-bold text-6xl bg-neutral-800 text-white min-[320px]:text-center max-[600px]:decoration-black'> Dictionary</h3>
          <div className='flex justify-center text-xl my-6 shadow-md '>
              <input placeholder='Type to search...'  
              className='w-52 h-8 bg-stone-50 focus:outline-none '
              type='search'
              value={searchData}
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
       */    
export default Search