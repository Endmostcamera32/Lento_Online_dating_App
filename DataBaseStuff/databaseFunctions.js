const database = require('./databaseConnection');
//Sohrab Stuff
function getAllPosts(callback) {
	let sqlQuery = "SELECT post_id, first_name, last_name, gender, age, address, profile_picture_url FROM post JOIN user ON post.user_id = user.user_id";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}











//Oliver Stuff








module.exports = {getAllPosts}