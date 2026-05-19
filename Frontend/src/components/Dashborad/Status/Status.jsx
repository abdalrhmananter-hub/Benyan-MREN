import styles from './Status.module.css'
import CardStatus from '../../UI/CardStatus/CardStatus';
function Status() {
    const cards = [
        { title: "Projects", counter: 120, icon: "fa-building" },
        { title: "Users", counter: 130, icon: "fa-users" },
        { title: "Developers", counter: 80, icon: "fa-code" },
        { title: "Blogs", counter: 50, icon: "fa-blog" }
    ]
    return (
        <section className='py-4'>
            <div className="container">
                <div className="row">

                    {cards.map((card, index) => (
                        <div key={index} className="col-12 col-md-3">
                            <CardStatus title={card.title}  counter={card.counter} icon={card.icon} />
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default Status;



{/* <div className="col-12 col-md-3">
                        <CardStatus  counter="120" title="Projects"/>
                    </div>
                    <div className="col-12 col-md-3"> 
                        <CardStatus counter="130" title="Users"/> 
                        </div>
                    <div className="col-12 col-md-3">
                         <CardStatus counter="80" title="Developers" />
                         
                          </div>
                    <div className="col-12 col-md-3"> 
                        <CardStatus counter="50" title="Blogs"/> 
                        
                        </div> */}