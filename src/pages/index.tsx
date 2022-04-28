import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
   <>
      <div className="font-syne">
        <h1 className="text-center text-2xl sm:text-5xl sm:pt-20 pt-10 font-bold">Hello from NextJs, Typescript, Tailwind and DaisyUi</h1>
        <div className="flex flex-col container max-w-sm mx-auto sm:max-w-lg">
          <p className="text-center p-5">Get Started by cloning the repo</p>
          <div className="mockup-code">
            <pre data-prefix="$"><code>git clone https://github.com/default-sameer/nextjs-typescript-tailwind-starter-template.git</code></pre>
          </div>
          <p className="text-center p-5">and editing <code>index.tsx</code></p>
        </div>
      </div>
      
      
   </>
  )
}

export default Home
