export default function Animacion() {

  return (
    <div className="picture-resume-wrapper"> {/* Animación */}
        <div className="picture-resume">
            <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" /></span>
            <svg version="1.1" viewBox="0 0 350 350">
                <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                </filter>
                </defs>
                <g filter="url(#goo)" >  
                <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r="130"/>
                
                <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
                <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>

                </g>  
            </svg>
        </div>
        <div className="clearfix"></div>
    </div>
  );
}
