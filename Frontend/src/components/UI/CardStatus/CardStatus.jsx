import styles from './CardStatus.module.css'

function CardStatus({title,counter,icon}) {
    return (
        <>
            <div className={`${styles.cardStatus} d-flex align-items-center `}>
                <div className={`${styles.icon} w-100 d-flex justify-content-center `}>
                    <i className={`fa-solid ${icon}`}></i>
                </div>
                <div className={`${styles.info} w-100 d-flex flex-column align-item-center gap-2 `}>
                    <span className={`${styles.counter}`}>{counter}</span>
                    <span className={`${styles.title}`}>{title}</span>
                </div>

            </div>
        </>
    )

}


export default CardStatus;