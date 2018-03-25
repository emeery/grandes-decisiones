import moment from 'moment';
export default [{
    id: '1',
    descripcion: 'goma',
    nota: '',
    monto: 195,
    date: 0,
},{
    id: '2',
    descripcion: 'renta',
    nota: '',
    monto: 109500,
    date: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    descripcion: 'tarjeta credito',
    nota:'',
    monto: 4500,
    date: moment(0).add(4, 'days').valueOf()
}];