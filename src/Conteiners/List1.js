
import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';

function List1(){ 
  const [Data, setData] = useState([]);
  const history = useHistory()

  let getData = () => {
    let localData = JSON.parse(localStorage.getItem("BookApk"))
    if (localData !== null) {
        setData(localData)
    }
}
useEffect(() => {
    getData()
}, [])
const handleDelete = (id) => {
  let localData = JSON.parse(localStorage.getItem("BookApk"));

  let fData = localData.filter((l) => l.id !== id)

  localStorage.setItem("BookApk", JSON.stringify(fData))

  console.log(id, localData);
  getData()
}
const handleEdit = (id) => {
  history.push('/appointment-1', { id: id })
  // console.log(id);
}
    return( 
        <>
          {
            Data.map((d,i)=>{
              return(
                <Card key={i}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{d.name}Card title</CardTitle>
                  <CardSubtitle>{d.email}email</CardSubtitle>
                  <CardText>{d.date}date</CardText>
                  <Button onClick={() => handleDelete(d.id)}> Delete </Button>
                  <Button onClick={() => handleEdit(d.id)}> Edit </Button>
                </CardBody>
              </Card>
              )
            })
          } 
        </>
    ); 
  } 

   

export default List1
