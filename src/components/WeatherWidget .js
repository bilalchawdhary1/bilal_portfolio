import {useEffect} from "react";

export default function WeatherWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.id = "weatherwidget-io-js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className='fixed right-5 bottom-5 z-50 md:hidden'>
      <a
        className='weatherwidget-io'
        href='https://forecast7.com/en/30d3869d35/pakistan/'
        data-label_1='PAKISTAN'
        data-label_2='WEATHER'
        data-theme='original'
      >
        PAKISTAN WEATHER
      </a>
    </div>
  );
}
