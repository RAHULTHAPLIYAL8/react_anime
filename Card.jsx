function Card(props)
{
    return  (<div className="cards">
    <div className="card">
        <img src={props.img} alt="imageshow" className="card_img" />
        <div className="card_info">
            <span className="card_category">A Neflix Series</span>
            <h3 className="card_title">{props.name}</h3>
            <a href={props.link} target="_blank" >
                <button>Watch now</button>
            </a>
        </div>
    </div>
</div>)
}
export default Card;