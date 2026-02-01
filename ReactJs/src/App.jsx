import './App.css'
import Accordian from './AccordianComponents/Accordian'
import RandomColor from './RandomColorGenerator/RandomColor'
import Rating from './StarRating/rating'
import Slider from './ImageSlider/Slider'
import LoadData from './LoadMoreData/LoadData'
import Tree from './TreeView/Tree'
import QRcode from './QRcodeGenerator/QRcode'
import Theme from './ChangeTheme/Theme'
import ScrollIndicator from './CustomScrollIndicator/ScrollIndicator'
import TabTest from './CustomTabs/TabTest'

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
      {/* <Slider url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}

      {/* 5} Load More Data */}
      {/* < LoadData /> */}

      {/* 6} Tree View (Recursive Component) */}
      {/* < Tree /> */}

      {/* 7} QR code Generator */}
      {/* < QRcode /> */}

      {/* 8} Change Theme */}
      {/* < Theme /> */}

      {/* 9} Custom Scroll Indicator */}
      {/* < ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* 9} Custom Tabs  */}
      < TabTest />
    </>
  )
}

export default App
