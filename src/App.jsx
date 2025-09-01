import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function MyButton(){
//   return (
//     <button>im a button</button>
//   );
// } 
// // export default myButton;
// export default function MyApp(){
//   return(
//     <div>
//       <h1>Welcome to my app 😁</h1>
//       <MyButton />
//     </div>
//   );
// }
// function AboutPage(){
//   return(
//     <>
//     <h1>About</h1>
//     <p>Hello there .<br />How are you?</p>
//     </>
//   );
// }
// export default AboutPage;

//  {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
         
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
const user = {
  name: 'TCK',
  imageUrl: 'carx.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}