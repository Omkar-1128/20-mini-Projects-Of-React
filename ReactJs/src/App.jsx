import './App.css'
import Accordian from './AccordianComponents/Accordian'
import RandomColor from './RandomColorGenerator/RandomColor'
import Rating from './StarRating/rating'
import Slider from './ImageSlider/Slider'

function App() {
  return (
    <>
      {/* 1} Accordian Components */}
      {/* <Accordian /> */}

      {/* 2} Random Color Generator */}
      {/* <RandomColor /> */}

      {/* 3} Star Rating */}
      {/* <Rating /> */}

      {/* 4} Image Slider */}
      <Slider url={"https://picsum.photos/v2/list"} page={1} limit={10}/>
    </>
  )
}

export default App
