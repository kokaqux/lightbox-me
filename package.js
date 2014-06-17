Package.describe({
  summary: "wrapper for jquery lightboxme"
});

Package.on_use(function (api, where) {
	api.use(['jquery'],'client');
	api.add_files('lib/lightboxme.js', 'client');
});

Package.on_test(function (api) {
	api.use(['jquery','tinytest','test-helpers','lightbox-me'],'client');
	api.add_files('lib/lightboxme_test.js', 'client');
});

