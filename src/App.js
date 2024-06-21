import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      name:"Programação",
      color:"#57C278",
    },
    {
      name:"Frontend",
      color:"#82CFFA",
    },
    {
      name:"Data Science",
      color:"#A6D157",
    },
    {
      name:"DevOps",
      color:"#E06B69",
    },
    {
      name:"Mobile",
      color:"#DB6EBF",
    },
    {
      name:"Inovação e Gestão",
      color:"#FFBA05",
    },
    {
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

  function changeTeamColor(color, teamName) {
    setTeams(teams.map(team => {
      if (team.name === teamName) {
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
