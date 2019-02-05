In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Few observations made on the API that we used in this project.
The posts API `https://jsonplaceholder.typicode.com/posts` does not have the provision for making calls to limit the number of elements/size of the return array. 100 posts in this case has low memory footprint however, it is a good practice to have `skip` and `limit` features to the API.

