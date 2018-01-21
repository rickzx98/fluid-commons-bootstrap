export default {
  headers: {},
  books: [],
  library: [],
  notifications: [],
  managedLibrary: {
    update: false,
    touched: false,
    active: false,
    invalid: false,
    books: []
  },
  book: {
    searched: false,
    update: false,
    touched: false,
    active: false,
    invalid: false,
    invalidMessage: '',
    tabEventKey: 'bookInfo',
    subjects: []
  },
  subjects: [],
  subject: {
    update: false,
    touched: false,
    active: false,
    subjectCode: '',
    data: {
      firstIndicator: '#',
      secondIndicator: '0'
    },
    subjectFormat: '#0',
  },
  dialog: {
    showCloseButton: true,
    title: 'Hello!',
    body: 'body here...',
    footer: 'footer here...',
    show: false,
    onEnter: () => {
    },
    onEntered: () => {
    },
    onEntering: () => {
    },
    onExit: () => {
    },
    onExited: () => {
    },
    onExiting: () => {
    },
    onHide: () => {
    }
  },
  settings: {
    funds: [],
    currencies: [],
    resourceTypes: []
  },
  googleBooks: {
    update: false,
    touched: false,
    active: false,
    query: {},
    result: {},
    newest: [],
    search: ''
  },
  bookPreview: {},
  ajaxGlobal: {
    started: false,
    done: false
  },
  security: {
    isAuthenticated: false
  },
  login: {
    forgotPassword: false,
    username: '',
    password: ''
  }
};
