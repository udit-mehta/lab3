
/*
 * GET home page.
 */

exports.view = function(req, res){

  var nameToShow = req.params.userName;
  if(!nameToShow)
  	nameToShow = "World";
  console.log( "name is " + nameToShow );

  res.render('index', {
  	'name': nameToShow,
  });
};
