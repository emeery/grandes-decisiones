import React from 'react';
import moment from 'moment';
import { SingleDatePicker} from 'react-dates'; 

// const ahora = moment();
// console.log(ahora.format('MMM Do, YYYY') );

class GastosForm extends React.Component {
    constructor(props) {
        super( props );
        this.state = {
        descripcion: props.gasto ?  props.gasto.descripcion : '' , 
        nota: props.gasto ? props.gasto.nota : '' , 
        monto: props.gasto ? (props.gasto.monto / 100 ).toString() : '', 
        date: props.gasto ? moment(props.gasto.date) : moment(),
        calendarFocused : false,
        error: ''
        };
    }
    descripcionCambio = (e) => {
        const descripcion = e.target.value; 
        this.setState(() => ({ descripcion })); 
    };
    // persistncia ();
    notaCambio = (e) => {
        const nota = e.target.value;
        this.setState(()=> ({ nota }));
    };
    montoCambio = (e) => {
        const monto = e.target.value;
        if (!monto || monto.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ monto }));
        }
    };
    onDatesChange = (date) => {
        if(date) {
            this.setState(()=> ({ date }));
        }
    };
    // focused - requerido
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.descripcion || !this.state.monto) {
            this.setState(() => ({error: 'ingresa los 2 valores'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                descripcion: this.state.descripcion,
                monto: parseFloat(this.state.monto, 10) * 100,
                date: this.state.date.valueOf(), // nmero regular que representa esa fecha
                nota: this.state.nota
            });
        }
    };
    render() {
        return( <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>      
            <input 
            type='text'
            placeholder='Descripcion'
            autoFocus
            value={this.state.descripcion}
            onChange={this.descripcionCambio} 
            />
            <input
            type='text'
            placeholder='Monto'
            value={this.state.monto}
            onChange={this.montoCambio}
            />
            
            <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDatesChange}
            focused={this.state.calendarFocused} 
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            
            <textarea
            placeholder='agrega una nota para tu gasto'
            value={this.state.nota}
            onChange={this.notaCambio}
            >
            </textarea>

            <button>Agrega Gasto</button>
        </form>    
        </div>);
    }
}; export default GastosForm;


// crear playlist.
// nombrePLaylist /* -string, nombre 1/100*/
// <button /*  elegir imagen */
// descripcion /* -string estos tres 0/300 */
// <button /* cancelar */
// <button /* crear */
