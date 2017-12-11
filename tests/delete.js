import axios from 'axios';
function deleteTest(){
	const url = "http://localhost:8000/v1/players";
	axios.delete(url,	{})
		.then(function(res){
			console.log("Deleted Successfully");
		})
		.catch(function(error){
			console.log(error);
			console.log("Error with delete command")
		});	
}

export default deleteTest();

