export const CONSTANTS = {

    tipoPaciente: {
        'O': { nombre: 'Obra social', color: 'primary' },
        'P': { nombre: 'Privado', color: 'warning' },
    },

    pacientePrepaga: 'O',
    pacientePrivado: 'P',

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
    ],

    btn: {
        GUARDAR: 'GUARDAR',
        ELIMINAR: 'ELIMINAR',
        CANCELAR: 'CANCELAR',
        ACTIVAR: 'ACTIVAR',
        DESACTIVAR: 'DESACTIVAR'
    },

    errores: {
        nombreVacio: 'Ingrese el nombre',
        apellidoVacio: 'Ingrese el apellido',
        tipoPacienteVacio: 'Seleccione el tipo',
        valorConsultaVacio: 'Ingrese el valor de la consulta',
        prepagaVacia: 'Seleccione la prepaga',
        pagoPrepagaVacio: 'Seleccione el pago',
        existePacienteNombre: 'Ya ingresó un Paciente con ese nombre y apellido'
    }

};

