
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

function App() {

  const [loading, setLoading] = useState(true)
  const [description, setDescription] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchDescription();
    // fetchFeatures();
    
  }, [])

  // useEffect(() => {
  //   fetchFeatures()
  // }, [])

  const fetchDescription = async () => {
    await fetch('http://localhost:3030/description')
      .then((res) => res.json())
      .then((data) => setDescription(data.map((elem) => (
        {
          id: elem.id,
          name: elem.name,
          body: elem.description_body,
          sku: elem.sku
        }
      ))))
      .catch((error) => console.log(error))
      console.log(description)
      

      await fetch('http://localhost:3030/features')
      .then((res) => res.json())
      .then((data) => setFeatures(data.map((elem) => (
        {
          id: elem.id,
          body: elem.features_body,
          sku: elem.sku
        }
      ))))
      .catch((error) => console.log(error))
      console.log(features)

      setLoading(false);
  }

  const fetchFeatures = async () => {
    await fetch('http://localhost:3030/features')
      .then((res) => res.json())
      .then((data) => setFeatures(data.map((elem) => (
        {
          id: elem.id,
          body: elem.features_body,
          sku: elem.sku
        }
      ))))
      .catch((error) => console.log(error))
      console.log(features)
  }

    if(loading === true){
      console.log('loading')
      return(
        <h1 className="header">Loading</h1>
      )
    } else {
      return (
       <AppContainer>
          <h3>{description[0].name}</h3>
          <h3>{description[0].body}</h3>
          <h3>{features[0].body}</h3>
        </AppContainer>
      )
    }
    }

export default App;

const AppContainer = styled.div`
  display: flex;
`



