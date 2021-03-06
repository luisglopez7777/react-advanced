import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'


export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context)
    return (
        <>
            <RegisterMutation>
                {
                    (register, { loading, data, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password };
                            const variables = { input };
                            register({ variables })
                                .then(({ data }) => {
                                    const { signup } = data
                                    activateAuth(signup)
                                })
                                .catch((error) => { console.log(error.graphQLErrors[0].message); });
                        };

                        const errorMsg = error && error.graphQLErrors[0].message;
                        return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Registrarse" />;
                    }
                }
            </RegisterMutation>

            <LoginMutation>
                {
                    (login, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password };
                            const variables = { input };
                            login({ variables })
                                .then(({ data }) => {
                                    const { login } = data
                                    activateAuth(login)
                                })
                                .catch((error) => { console.log(error.graphQLErrors[0].message); });
                        };

                        const errorMsg = error && error.graphQLErrors[0].message;
                        return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
                    }
                }
            </LoginMutation>
        </>
    )
}


