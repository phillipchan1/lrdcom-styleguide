 var app = new senna.App();
 app.setBasePath('/pages/');
 app.addSurfaces('content');
 app.addRoutes([
 	new senna.Route('page1.html', senna.HtmlScreen),
 	new senna.Route('page2.html', senna.HtmlScreen)
 	]);