import React, { useRef } from 'react'
import UseFetch from '../UseFetchCustomHook/UseFetch';

function ScrollTopAndBottom() {

    const [data, error, loading] = UseFetch("https://dummyjson.com/products?limit=100", {});

    const topRef = useRef(null);
    const bottomRef = useRef(null);

    function handleScrollTop() {
        topRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    function handleScrollBottom() {
        bottomRef.current.scrollIntoView({behavior: "smooth"});
    }

    if(loading) {
        return <h1> Loading, Please Weight </h1>
    }

    if(error) {
        return <h1> Error Occured: {error} </h1>
    }

  return (
    <div ref={topRef} style={{height: "100vh", width: "100%" , overflow: "auto"}}>
      <h2>WelCome To Lightning Ace World</h2>
      <h2>This is the top of webpage</h2>
      <button onClick={handleScrollBottom}>Scroll To Bottom</button>

        <ul style={{listStyle: "none"}}>
            {data && data.products && data.products.length && 
                data.products.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>

        <h2>This is the bottom of webpage</h2>
        <button onClick={handleScrollTop}>Scroll To Top</button>
        <div ref={bottomRef}></div>
    </div>
  ) 
}

export default ScrollTopAndBottom
