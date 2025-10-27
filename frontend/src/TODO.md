# Now:

## Header

add styles
add responsiveness
add links / routes when im using react

## Books Container
## Book Card
- show book info when clicked
- add download button


# New Pages

### Home

> CRUD
- upload new book (create)
- user dashboard
- link to my books

### My Books

> CRUD
- upload new book (create)
- update book (update metadata and format)
- delete books

### PDF Reader

> CRUD
- upload PDF
- read PDF
- update PDF
- delete PDF

- yellow marker

* I intend to support other formats

### New Uploads

# Next steps you can work on:

- Connect to your FastAPI backend (just uncomment the fetch code in App.tsx). Core Functionality:

* Backend Connection: The frontend currently uses mock data. It needs to be connected to your FastAPI backend to fetch and display real data.
* CRUD Operations: The application is missing the ability to Create, 
Read (details of a single book), Update, and Delete books.
* PDF Reader: A significant feature mentioned in your README.md and  
TODO.md, the PDF reader, is not yet implemented. This includes     
     uploading, viewing, and interacting with PDF files (like the       
     marker)
- Add search/filter functionality
- Add book detail pages
- Implement CRUD operations (create, update, delete books)

User-Facing Features:

   * User Accounts: There is no user authentication or management       
     system, which is implied by the "user dashboard" and "my books"    
     sections in your TODO.md.
   * Search and Filtering: The application lacks a search bar or        
     filtering options to help users
    Routing: The application is currently a single page. You will need 
     to implement routing to navigate between different views like the  
     main page, book details, and user-specific pages.