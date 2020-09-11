import axios from "axios";
export default async function ({ redirect, store, error }) {
    if (store.state.token && store.state.tipo) {
    } else {
        error({
            message: 'No cuentas con una sesión valida!',
            statusCode: 403
        })
    }
}
