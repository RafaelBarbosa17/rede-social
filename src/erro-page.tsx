
import { useRouteError } from 'react-router-dom';

export const  ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>
                Sentimos muito! ocorreu um erro inesperado.
            </p>
        </div>
    )
}