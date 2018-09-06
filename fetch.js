// window.onload = function() {
// 	// fecth blog posts about front-end development
// 	fetch('https://api.github.com/search/code?q=user:lycai05+repo:blog_post_front-end+extension:md')
// 		.then(response => response.json())
// 		.then(data => {

// 		  console.log(data) // Prints result from `response.json()` in getRequest
// 		  data = data.items;
// 		  let arr = [];
// 		  for (let i = 0; i < data.length; i++) {
// 		  	if (/^2018/.test(data[i]['name'])) {
// 		  		console.log("pattern");
// 		  		let date = /(\d{4})-(\d{2})-(\d{2})/.exec(data[i]['name'])
// 		  		let name = data[i]['name'].replace(/(\d{4})-(\d{2})-(\d{2})-/, '')
// 		  		name = name.replace('.md', '')
// 		  		let src = data[i].html_url;
// 		  		arr.push({'date': date, 'name': name, 'src': src});
// 		  	}
// 		  }
// 		  console.log(arr);
// 		})
// 		.catch(error => console.error(error))

// 	// fetch blog posts about bioinformatics
// }

let front_end_posts = [
	{
		'name': '学习前端开发中的数据交互',
		'url': 'https://github.com/lycai05/blog_post_front-end/blob/master/2018-09-05%E5%AD%A6%E4%B9%A0%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92.md',
		'date': '2018/09/05'
	},
	{
		'name': '用Javascript实现常用的数据结构和算法',
		'url': 'https://github.com/lycai05/blog_post_front-end/blob/master/2018-09-05%E5%AD%A6%E4%B9%A0%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92.md',
		'date': '2018/09/05'
	}
];

(function insertBlogs() {
	var postList = document.getElementsByClassName("post-list")[0];
	for (let i = 0; i < front_end_posts.length; i++) {
		let post = document.createElement('li');
		post.className = "list-group-item"
		post.innerHTML='<a href= "' + front_end_posts[i]['url'] + '" class="float-left card-link">' + front_end_posts[i]['name'] + '</a><a class="float-right align-middle small ">' + front_end_posts[i]['date'] + '</span>';
		postList.appendChild(post);
	}
}());