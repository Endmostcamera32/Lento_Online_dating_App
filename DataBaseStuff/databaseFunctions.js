const database = include('/databaseConnection');
//Sohrab Stuff
function getAllPosts(callback) {
	let sqlQuery = "SELECT web_user_id, first_name, last_name, post_list, age FROM post_listing";
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








module.exports = {}