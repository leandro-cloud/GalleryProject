import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Paris from "./Paris";
import Amsterdam from "./Amsterdam";
import Berlin from "./Berlin";
import London from "./London";
import NewYork from "./NewYork";
import Roma from "./Roma";
import Tokio from "./Tokio";
import Viena from "./Viena";
import Madrid from "./Madrid";
import Miami from "./Miami";
import "./Navigation.css";

const Navigation = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Efecto y funcion para ocultar o mostrar las flechas laterales si no hay mas que mostrar.
  useEffect(() => {
    updateArrowsVisibility();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', updateArrowsVisibility);
    }
    window.addEventListener('resize', updateArrowsVisibility);

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', updateArrowsVisibility);
      }
      window.removeEventListener('resize', updateArrowsVisibility);
    };
  }, []);

  const updateArrowsVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
      
    }
  };

  // Funcion para manejar la navegacion hacia la izauierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };


  // Funcion para manejar la navegacion hacia la izauierda
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  

  return (
    <div className="flex items-center justify-between relative">
      {showLeftArrow && (
        <button className="absolute left-0" onClick={scrollLeft}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAKdJREFUSEvt1dEJgDAMBNDcJjpaN9FN3EQ30U0qgX5IQcm1sSK035GXXI1CPjr4yJUON0u+R/2PqGOMg4isIhIAbEzXxXec0D1hB4sXwRmq9gIgvDqxB6oNUhN7oRTsiZphb5SFdW10ffTMACbmZcprzXd82VkX3Axrx544BXviNOyFF8E3+AhAP52mUwxneLufhGmsh6KqiWvwDtekRz3bo6biqik+AXZ3Rx+FxLSEAAAAAElFTkSuQmCC" className="hover:scale-150" alt="Left arrow" />
        </button>
      )}
      <div ref={scrollContainerRef} className="flex h-[140px] gap-3 overflow-x-scroll overflow-y-hidden text-center text-white mx-10">
        <Link to='/amsterdam'>
          <figure className="w-[140px] h-[80px]">
            <Amsterdam />
            <figcaption>Amsterdam</figcaption>
          </figure>
        </Link>
        <Link to='/berlin'>
          <figure className="w-[140px] h-[80px]">
            <Berlin />
            <figcaption>Berlin</figcaption>
          </figure>
        </Link>
        <Link to='/london'>
          <figure className="w-[140px] h-[80px]">
            <London />
            <figcaption>London</figcaption>
          </figure>
        </Link>
        <Link to='/madrid'>
          <figure className="w-[140px] h-[80px]">
            <Madrid />
            <figcaption>Madrid</figcaption>
          </figure>
        </Link>
        <Link to='/miami'>
          <figure className="w-[140px] h-[80px]">
            <Miami />
            <figcaption>Miami</figcaption>
          </figure>
        </Link>
        <Link to='/newYork'>
          <figure className="w-[140px] h-[80px]">
            <NewYork />
            <figcaption>NewYork</figcaption>
          </figure>
        </Link>
        <Link to='/paris'>
          <figure className="w-[140px] h-[80px]">
            <Paris />
            <figcaption>Paris</figcaption>
          </figure>
        </Link>
        <Link to='/roma'>
          <figure className="w-[140px] h-[80px]">
            <Roma />
            <figcaption>Roma</figcaption>
          </figure>
        </Link>
        <Link to='/tokio'>
          <figure className="w-[140px] h-[80px]">
            <Tokio />
            <figcaption>Tokio</figcaption>
          </figure>
        </Link>
        <Link to='/viena'>
          <figure className="w-[140px] h-[80px]">
            <Viena />
            <figcaption>Viena</figcaption>
          </figure>
        </Link>
      </div>
      {showRightArrow && (
        <button className="absolute right-0" onClick={scrollRight}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAMBJREFUSEvt1esNwjAMBOC7UdiEbtJNgEkYpat0k0OWKIqQaOOHqBD1//ZLTo5N7FTcycUBfy3534la0h3AjeScicd1Y0kTgDMAQ4cM3g036HLRFO6BrwAub/GG8W7YQElluAuuxN1wFR6CK/AwnMWz8AjABkpbM8nT1nAJw5LCqB0qBGfREFyBuuEq1AVXol7Yutca6rUkerr3U3e7muu5iw3vejJrT8oFL0ODpC2LVLnhlNZ8fMBVSW7+5/+ifgBuqmEfE2QZLwAAAABJRU5ErkJggg==" className="hover:scale-150" alt="Right arrow" />
        </button>
      )}
    </div>
  );
}

export default Navigation;
