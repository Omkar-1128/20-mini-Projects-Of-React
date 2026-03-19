import "./App.css";
import Accordian from "./AccordianComponents/Accordian";
import RandomColor from "./RandomColorGenerator/RandomColor";
import Rating from "./StarRating/rating";
import Slider from "./ImageSlider/Slider";
import LoadData from "./LoadMoreData/LoadData";
import Tree from "./TreeView/Tree";
import QRcode from "./QRcodeGenerator/QRcode";
import Theme from "./ChangeTheme/Theme";
import ScrollIndicator from "./CustomScrollIndicator/ScrollIndicator";
import TabTest from "./CustomTabs/TabTest";
import ModelTest from "./CustomModelPopUp/ModelTest";
import GetProfile from "./GithubProfileFinder/GetProfile";
import SearchAutoComplete from "./SearchAutoCompleteUsingAPI/SearchAutoComplete";
import TicTakTok from "./Tic-Tak-Tok/TicTakTok";
import TestHook from "./UseFetchCustomHook/TestHook";
import OutsideClickTest from "./UseOutsideClickHook/OutsideClickTest";
import ResizeHookTest from "./WindowResizeHook/ResizeHookTest";
import ScrollTopAndBottom from "./ScrollToTopAndBottom/ScrollTopAndBottom";
import Sections from "./ScrollToPerticularSection/Sections";
import WeatherApp from "./WeatherApp/WeatherApp";
 
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

      {/* 10} Custom Tabs  */}
      {/* < TabTest /> */}

      {/* 11} Custom Model PopUp */}
      {/* <ModelTest /> */}

      {/* 12} GitHub Profile Finder */}
      {/* < GetProfile /> */}

      {/* 13} Search AutoComplete Using API */}
      {/* < SearchAutoComplete /> */}

      {/* 14} Tik Tak Tok Game */}
      {/* < TicTakTok /> */}

      {/* 15} Use Fetch Custom Hook  */}
      {/* < TestHook /> */}

      {/* 16} Outside Click Hook Test  */}
      {/* < OutsideClickTest /> */}

      {/* 17} Window Resize Hook Test  */}
      {/* < ResizeHookTest /> */}

      {/* 18} Scroll To Top And Bottom Feature  */}
      {/* < ScrollTopAndBottom /> */}

      {/* 19} Scroll To Perticular Section  */}
      {/* < Sections /> */}

      {/* 20} Weather App  */}
      < WeatherApp />
    </>
  );
}

export default App;
