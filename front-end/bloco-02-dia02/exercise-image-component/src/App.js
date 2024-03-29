// import React from 'react';
// import staringCat from '../src/cat-2083492_1280.webp'
// import Image from './Image';

// function App() {
//   const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
//   return (
//     <main>
//       <Image source={URL} alternativeText='Cute cat staring' />
//       {/* <Image source={staringCat} alternativeText="Cute cat staring" /> */} acima usando url e o link da imagem e aqui embaixo a imagem salva no pc.//
//     </main>
//   );
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////
// src/App.js
// import React from 'react';
// import Album from './Album';

// class App extends React.Component {

//   render() {
//     const album01 = {
//       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
//       title: 'Mylo Xyloto',
//       releaseDate: {
//         year: '2011',
//         month: '10',
//         day: '24',
//       },
//       others: {
//         recordCompany: 'Capitol, Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     const album02 = {
//       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//       title: 'Ghost Stories',
//       releaseDate: {
//         year: '2014',
//         month: '05',
//         day: '16',
//       },
//       others: {
//         recordCompany: 'Parlophone',
//         formats: 'CD, digital'
//       }
//     };
//     return (
//       <div>
//         <Album album={album01} />
//         <Album album={album02} />
//       </div>
//     );
//   }
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arquivo scr/App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;