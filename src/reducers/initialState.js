export default {
  books: [],
  book: {
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
    level: '#',
    thesaurus: '0',
    subjectFormat: '#0'
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
    result: {}
  },
  ajaxGlobal: {
    started: false,
    done: false
  }
};
