import React from 'react';

/* Importación de componenter */
import SideBar from './SideBar';
import Content from './Content';

function App() {
  return (
    <React.Fragment>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Corporate Dashboard - Admin</title>

        {/* <!-- Custom fonts for this dashboard --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

      </head> 

      <div className="App" id="wrapper">
        <SideBar />
        <Content />
      </div>
    </React.Fragment>
  );
}

export default App;