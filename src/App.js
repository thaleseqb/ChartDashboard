import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import {v4 as uuidv4} from "uuid";

function App() {

  const [teams, setTeams] = useState([
    {
      id:uuidv4(),
      name:"Programação",
      color:"#57C278",
    },
    {
      id:uuidv4(),
      name:"Frontend",
      color:"#82CFFA",
    },
    {
      id:uuidv4(),
      name:"Data Science",
      color:"#A6D157",
    },
    {
      id:uuidv4(),
      name:"DevOps",
      color:"#E06B69",
    },
    {
      id:uuidv4(),
      name:"Mobile",
      color:"#DB6EBF",
    },
    {
      id:uuidv4(),
      name:"Inovação e Gestão",
      color:"#FFBA05",
    },
    {
      id:uuidv4(),
      name:"UX e Design",
      color:"#FF8A29",
    }
  ]);

  const [colaborators, setColaborators] = useState([]);

  const onNewAddedColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  }

  function deleteColaborator() {
    console.log("deletando colaborador")
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team;
    }))
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
          id={team.id}
          changeColor={changeTeamColor}
          onDelete={deleteColaborator}
          key={team.name} 
          name={team.name}
          color={team.color}
          colaborators={colaborators.filter(colaborator => {
            return colaborator.team === team.name;
          })}
        />
      })}
      <Footer/>
    </div>
  );
}

export default App;
