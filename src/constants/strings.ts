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
    exampleScreen: {
      title: "Pantalla Ejemplo",
      counterLabel: "Contador",
      upButtonLabel: "Agregar"
    },
    itemsScreen: {
      title: "Items"
    },
    accountScreen: {
      title: "Mi Cuenta"
    }
  }
})

export default strings;