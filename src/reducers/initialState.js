export default {
  books: [],
  book: {
    update: false,
    touched: false,
    active: false,
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
    onEnter: () => { },
    onEntered: () => { },
    onEntering: () => { },
    onExit: () => { },
    onExited: () => { },
    onExiting: () => { },
    onHide: () => { }
  }
};
