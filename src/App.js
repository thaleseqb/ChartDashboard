import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name:"Programação",
      primaryColor:"#57C278",
      secundaryColor:"#D9F7E9"
    },
    {
      name:"Frontend",
      primaryColor:"#82CFFA",
      secundaryColor:"#E8F8FF"
    },
    {
      name:"Data Science",
      primaryColor:"#A6D157",
      secundaryColor:"#F0F8E2"
    },
    {
      name:"DevOps",
      primaryColor:"#E06B69",
      secundaryColor:"#FDE7E8"
    },
    {
      name:"Mobile",
      primaryColor:"#DB6EBF",
      secundaryColor:"#FAE9F5"
    },
    {
      name:"Inovação e Gestão",
      primaryColor:"#FFBA05",
      secundaryColor:"#FFF5D9"
    },
    {
      name:"UX e Design",
      primaryColor:"#FF8A29",
      secundaryColor:"#FFEEDF"
    }
  ]

  const [colaborators, setColaborators] = useState([]);

  const onNewAddedColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form
        teams={teams.map(item => {
          return item.name
        })}
        onAddedColaborator={colaborator => 
        onNewAddedColaborator(colaborator)}
      />
      {teams.map(team => {
        return <Team 
          key={team.name} 
          name={team.name}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
        />
      })}
    </div>
  );
}

export default App;
