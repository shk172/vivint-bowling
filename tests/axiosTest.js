import axios from 'axios';

const url = "http://localhost:5000/v1/contents"
axios.post(url, {
	title: "SangHee's event",
	date: new Date(),
	creator: "SangHee",
	numPeople: 1,
	numPeopleWanted: 1,
	numPeopleAccepted: 0,
	location: "SangHee's House",
})
.then(function(response){
	//console.log(response);
	axios.delete(url,	{title: "SangHee's event"})
		.then(function(res){
			console.log("Deleted Successfully");
		})
		.catch(function(error){
			console.log(error);
			console.log("Error with delete command")
		});
})
.catch(function(error){
	console.log("Error with post command");
	//console.log(error);
})



axios.post(url, {
	title: "SangHee's event 2",
	date: new Date(),
	creator: "SangHee",
	numPeople: 1,
	numPeopleWanted: 1,
	numPeopleAccepted: 0,
	location: "SangHee's House",
})
.then(function(response){
	//console.log(response);
})
.catch(function(error){
	console.log("Error with post command");
	//console.log(error);
})

axios.get(url)
  .then(function (response) {
    //console.log(response.data.events);
  })
  .catch(function (error) {
		console.log(error);
		console.log("Error with get command");
	});
