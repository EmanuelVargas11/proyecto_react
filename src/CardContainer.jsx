import Card from './Card';
function CardContainer() {
    return (
        <div className="container card-container d-flex">
            <Card Titulo={'Salud'} Descripcion={'El area de salud se encuentra en desarrollo'}/>
            <Card Titulo={'Gastos'} Descripcion={'El area de gastos trabaja en conjunto con el area de reportes'}/>
            <Card Titulo={'Atencion medica'} Descripcion={'Actualmente se encuentra con capacidad del 75% de ocupacion'}/>
        </div>
    );
}
export default CardContainer