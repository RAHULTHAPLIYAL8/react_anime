import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import "./index.css";
import data from "./data";

ReactDOM.render(<>
<h1 class="heading_style">List of top 10 Anime series</h1>
    <Card 
    img={data[0].img}
    name={data[0].name}
    link={data[0].link}
    />
    <Card
    img={data[1].img}
    name={data[1].name}
    link={data[1].link}
    />
    <Card
    img={data[2].img}
    name={data[2].name}
    link={data[2].link}
    />
    <Card
    img={data[3].img}
    name={data[3].name}
    link={data[3].link}
    />
    <Card
    img={data[4].img}
    name={data[4].name}
    link={data[4].link}
    />
    <Card
    img={data[5].img}
    name={data[5].name}
    link={data[5].link}
    />
    <Card
    img={data[6].img}
    name={data[6].name}
    link={data[6].link}
    />
</>, document.getElementById("root"));