import moment from 'moment';

const filtros = {
    texto: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altfiltros = {
    texto: 'cuentas',
    sortBy: 'monto',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export {filtros, altfiltros};