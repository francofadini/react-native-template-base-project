import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  es:{
    antDesign: {
      ok: "OK",
      cancel: "Cancelar",
      select: "Seleccionar",
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
      cancelLabel: "Cancelar",
      okLabel: "OK"
    },
    qrScannerScreen: {
      title: "Escanear QR"
    },
    exampleScreen: {
      title: "Pantalla Ejemplo",
      counterLabel: "Contador",
      upButtonLabel: "Agregar"
    },
    postsScreen: {
      title: "Posts"
    },
    accountScreen: {
      title: "Mi Cuenta"
    },
    privateContentScreen: {
      message: "Debes ingresar a tu cuenta para ver esta sección",
      loginButtonTitle: "Acceder",
      signUpTitle: "Crear Cuenta",
      loadingMessage: "Cargando...",
      authPermissionTitle: "Permisos de Autenticación",
      authPermissionMessage: "Te pediremos permiso para verificar tu cuenta. Por favor haz click en 'Continuar'",
      authPermissionButtonLabel: "Entendido",
      errors: {
        genericLoginTitle: "Error de autenticación",
        genericLoginMessage: "Ocurrió un problema al intentar autenticarse"
      }
    },
    profileScreen: {
      title: "Perfil",
      logout: "Cerrar Sesión",
      errors: {
        profileErrorTitle: "Error",
        profileErrorMessage: "Ocurrió un problema al intentar obtener los datos del usuario"
      }
    },
  }
})

export default strings;