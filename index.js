//2. Complete the following javascript function that accepts the url and the parameter
// name and returns the value of that parameter.



var url_st =  “https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&u
  tm_medium=webplugin&utm_campaign=poweredby”;
  var url = new URL("url_st");
  var utm_medium = url.searchParams.get("utm_medium");
  console.log(utm_medium);

var url_st1 = “https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&u
tm_medium=webplugin&utm_campaign=poweredby”;

var url = new URL("url_st1");

var utm_campaign= url.searchParams.get("utm_campaign");
console.log(utm_campaign);



/// 3 
///Write a javascript function that prints the reverse of a number. Example: if the
///number is 149, then output should be 941

function reverse_a_number(x)
{
	x = x + "";
	return x.split("").reverse().join("");
}
console.log(Number(reverse_a_number(149)));

////Describe the best project you have worked on, including links if any.

