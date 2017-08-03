export const ENV_CONFIG = {
    'process.env.SCHOOL_ID': JSON.stringify(process.env.SCHOOL_ID || 'schoolId'),
    'process.env.FILE_ID': JSON.stringify(process.env.FILE_ID || 'http://localhost:3014/api/files'),
    'process.env.GOOGLE_BOOKS_API': JSON.stringify(process.env.GOOGLE_BOOKS_API || 'https://www.googleapis.com/books/v1/volumes'),
    'process.env.GOOGLE_BOOKS_API_KEY': JSON.stringify(process.env.GOOGLE_BOOKS_API_KEY || 'AIzaSyBDXNcM4j1zuzyv0lEIb7O_5LgOP3uRbp4')
};
