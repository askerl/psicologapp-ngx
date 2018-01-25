export const CONSTANTS = {

    tipoPaciente: {
        'O': { nombre: 'Obra social', color: 'primary' },
        'P': { nombre: 'Privado', color: 'warning' },
    },

    prepagasById: {
        'galeno': {
            nombre: 'Galeno',
            pagos: [15, 175, 452.36],
        },
        'ososs': {
            nombre: 'OSOSS',
            pagos: [230],
        },
        'ospacp': {
            nombre: 'O.S.P.A.C.P',
            pagos: [230],
        },
    },

    estados: [
        { value: null, title: 'Todos' },
        { value: true, title: 'Activos' },
        { value: false, title: 'Inactivos'}
    ]

};

