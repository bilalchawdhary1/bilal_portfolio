export default function HeroDiagramFallback() {
  return (
    <svg
      viewBox='0 0 400 300'
      role='img'
      aria-labelledby='hero-visual-title hero-visual-description'
      className='h-auto w-full'
    >
      <title id='hero-visual-title'>AI software engineering ecosystem</title>
      <desc id='hero-visual-description'>
        AI models connect intelligent applications, APIs, Python backend
        systems, and databases.
      </desc>
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='2'
        className='text-primary/30 dark:text-primaryDark/35'
      >
        <path d='M200 106V67m-32 58-62-26m-3 42 39 28m115-86 62-26m3 84-39 28m-72 0-48 54m71-54 48 54' />
        <path d='M194 76l6-9 6 9M116 102l-10-4 5 10M157 157l-3 11 10-5M284 102l10-4-5 10M243 157l3 11-10-5M157 211l-4 10 10-4M243 211l10 4-4-10' />
      </g>
      <g fill='currentColor' className='text-primary/25 dark:text-primaryDark/30'>
        <circle cx='200' cy='67' r='3' />
        <circle cx='106' cy='98' r='3' />
        <circle cx='301' cy='98' r='3' />
        <circle cx='132' cy='168' r='3' />
        <circle cx='268' cy='168' r='3' />
        <circle cx='153' cy='222' r='3' />
        <circle cx='247' cy='222' r='3' />
      </g>
      <g className='hero-fallback-flow' fill='#9bd5ff' aria-hidden='true'>
        <circle r='2.3'>
          <animateMotion
            dur='3.8s'
            repeatCount='indefinite'
            path='M200 64 L200 103'
          />
        </circle>
        <circle r='2.3'>
          <animateMotion
            dur='4.4s'
            begin='-1.6s'
            repeatCount='indefinite'
            path='M164 131 L112 115'
          />
        </circle>
        <circle r='2.3'>
          <animateMotion
            dur='4.1s'
            begin='-2.2s'
            repeatCount='indefinite'
            path='M294 115 L238 133'
          />
        </circle>
        <circle r='2.3'>
          <animateMotion
            dur='4.6s'
            begin='-0.8s'
            repeatCount='indefinite'
            path='M153 164 L176 156'
          />
        </circle>
        <circle r='2.3'>
          <animateMotion
            dur='4.3s'
            begin='-2.8s'
            repeatCount='indefinite'
            path='M247 164 L224 156'
          />
        </circle>
      </g>
      <g className='fill-white dark:fill-dark'>
        <rect
          x='158'
          y='26'
          width='84'
          height='38'
          rx='12'
          stroke='currentColor'
          className='text-dark/15 dark:text-light/15'
        />
        <rect
          x='10'
          y='78'
          width='96'
          height='42'
          rx='12'
          stroke='currentColor'
          className='text-dark/15 dark:text-light/15'
        />
        <rect
          x='294'
          y='78'
          width='96'
          height='42'
          rx='12'
          stroke='currentColor'
          className='text-dark/15 dark:text-light/15'
        />
        <rect
          x='46'
          y='164'
          width='126'
          height='42'
          rx='12'
          stroke='currentColor'
          className='text-dark/15 dark:text-light/15'
        />
        <rect
          x='228'
          y='164'
          width='126'
          height='42'
          rx='12'
          stroke='currentColor'
          className='text-dark/15 dark:text-light/15'
        />
      </g>
      <circle
        cx='200'
        cy='142'
        r='38'
        className='fill-primary dark:fill-primaryDark'
      />
      <g
        fill='currentColor'
        className='font-sans text-[10px] font-semibold text-dark dark:text-light'
        textAnchor='middle'
      >
        <text x='200' y='42'>LLM MODELS</text>
        <text x='200' y='54' className='font-normal text-[7px] opacity-70'>
          OpenAI · Gemini
        </text>
        <text x='58' y='96'>AI APPLICATIONS</text>
        <text x='58' y='109' className='font-normal text-[7px] opacity-70'>
          Intelligent Products
        </text>
        <text x='342' y='96'>API INTEGRATIONS</text>
        <text x='342' y='109' className='font-normal text-[7px] opacity-70'>
          REST APIs
        </text>
        <text x='109' y='181'>PYTHON BACKEND</text>
        <text x='109' y='194' className='font-normal text-[7px] opacity-70'>
          FastAPI · Services
        </text>
        <text x='291' y='181'>DATA SYSTEMS</text>
        <text x='291' y='194' className='font-normal text-[7px] opacity-70'>
          PostgreSQL · Storage
        </text>
      </g>
      <text
        x='200'
        y='148'
        fill='white'
        textAnchor='middle'
        className='font-sans text-base font-semibold'
      >
        AI
      </text>
    </svg>
  );
}
