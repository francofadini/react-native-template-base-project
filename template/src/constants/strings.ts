import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  es: {
    antDesign: {
      ok: 'OK',
      cancel: 'Cancelar',
      select: 'Seleccionar',
      done: 'Finalizado',
      loading: 'Cargando',
      refreshableTitlePull: 'Desliza para actualizar',
      refreshableTitleRelease: 'Suelta para actualizar',
      refreshableTitleRefreshing: 'Cargando...',
      noData: 'Aún no hay datos',
      prevText: 'Ant',
      nextText: 'Sig',
      buttonText: 'Boton',
      backspaceLabel: 'Retroceso',
      cancelKeyboardLabel: 'Cancelar Teclado',
    },
    alert: {
      cancelLabel: 'Cancelar',
      okLabel: 'OK',
    },
    privateContentScreen: {
      message: 'Debes ingresar a tu cuenta para ver esta sección',
      loginButtonTitle: 'Acceder',
      signUpTitle: 'Crear Cuenta',
      loadingMessage: 'Cargando...',
      authPermissionTitle: 'Permisos de Autenticación',
      authPermissionMessage:
        "Te pediremos permiso para verificar tu cuenta. Por favor haz click en 'Continuar'",
      authPermissionButtonLabel: 'Entendido',
      errors: {
        genericLoginMessage: 'Ocurrió un problema al intentar autenticarse',
      },
    },
    auth0LoginScreen: {
      title: 'Acceder',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Contraseña',
      forgotPasswordLabel: 'Olvidé mi contraseña',
      loginLabel: 'Ingresar',
      forgotPasswordTitle: 'Restablecer Contraseña',
      forgotPasswordMessage:
        'Para que podamos restablecer la contraseña es necesario ingresar una cuenta de email valida. Te enviaremos un correo con las instrucciones.',
      loginWithFacebook: 'Ingresá con Facebook',
      loginWithGoogle: 'Ingresá con Google',
      dontHaveAccountLabel: '¿No tenés una cuenta?',
      registerLabel: 'Registrate',
      errors: {
        defaultErrorTitle: 'Error de autenticación',
        defaultErrorMessage: 'Ocurrió un error de autenticación',
        notAllowedProfileMessage:
          'Tu usuario no posee un perfil autorizado a usar esta plataforma',
        newProfileErrorMessage:
          'Tu usuario es nuevo y necesita darse de alta. Contacta a contacto@cocowo.me para mas información',
        invalidInputTitle: 'Campo invalido',
        invalidEmailInput: 'Ingresá un email valido',
        invalidPasswordInput: 'Ingresá una contraseña valida',
      },
    },
    auth0RegisterScreen: {
      title: 'Crear Cuenta',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Contraseña',
      repeatPasswordPlaceholder: 'Confirmar contraseña',
      registerLabel: 'Registrate',
      loginWithFacebook: 'Ingresá con Facebook',
      loginWithGoogle: 'Ingresá con Google',
      alreadyHaveAccountLabel: '¿Ya estás registrado?',
      loginLabel: 'Ingresá',
      successRegisterTitle: 'Usuario registrado',
      successRegisterMessage: 'El usuario se registró correctamente',
      errors: {
        defaultErrorTitle: 'Error de autenticacion',
        weakPasswordErrorMessage: 'La contraseña que ingresó es poco segura ',
        emailAlreadyInUserErrorMessage:
          'Ya existe una cuenta con el email ingresado',
        unknownCredentialsErrorMessage:
          'Ocurrio un problema desconocido al intentar crear la cuenta',
        invalidInputTitle: 'Campo invalido',
        invalidEmailInput: 'Ingresá un email valido',
        invalidPasswordInput: 'Ingresá una contraseña valida',
        repeatPasswordError: 'Las contraseñas deben coincidir',
      },
    },
    postsScreen: {
      title: 'Posts',
      loadingMessage: 'Cargando...',
    },
    accountScreen: {
      title: 'Mi Cuenta',
    },
    profileScreen: {
      title: 'Perfil',
      logout: 'Cerrar Sesión',
      errors: {
        profileErrorMessage:
          'Ocurrió un problema al intentar obtener los datos del usuario',
      },
    },
  },
});

export default strings;
